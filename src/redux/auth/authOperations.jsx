import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:3030/api/';
axios.defaults.baseURL = 'https://iron-body-project-backend.onrender.com/api/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('users/register', credentials);

    token.set(data.accessToken);
    return data;
  } catch (error) {
    Notify.failure(
      `Register Error with status code ${error.response.status} and message "${error.response.data.message}"`,
    );
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.accessToken);

    Notify.success('Login Success');
    return data;
  } catch (error) {
    Notify.failure(
      `Login Error with status code ${error.response.status} and message "${error.response.data.message}"`,
    );

    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');

    Notify.success('Logout Succesfull');
    token.unset();
  } catch (error) {
    Notify.failure(`Unable to logout. Error message is "${error.message}"`);
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
const refreshCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.accessToken;

  if (!persistedToken) return thunkAPI.rejectWithValue();

  token.set(persistedToken);

  try {
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    console.log(error);
    Notify.failure(`Unable to refresh. Error message is "${error.message}"`);
    thunkAPI.rejectWithValue(error.message);
  }
});
export const authOperations = {
  register,
  login,
  logout,
  refreshCurrentUser,
};
