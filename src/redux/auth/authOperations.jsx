import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:3030/api/';
// axios.defaults.baseURL = 'https://iron-body-project-backend.onrender.com/api/';

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
    const { name } = credentials;
    const response = await axios.post('users/register', credentials);
    Notify.success(`${name} registered successfully`);

    token.set(response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log('error :>> ', error);

    if (error.response) {
      Notify.failure(`${error.response.data.message}`);
    }

    if (!error.response) {
      Notify.failure(`Register Error with with message "${error.message}"`);
    }

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
    console.log('error :>> ', error.response);

    if (error.response) {
      Notify.failure(`${error.response.data.message}`);
    }

    if (!error.response) {
      Notify.failure(`Login Error with message "${error.message}"`);
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});
const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');

    Notify.success('Logout Succesfull');
    token.unset();
  } catch (error) {
    console.log('error :>> ', error);

    if (error.response) {
      Notify.failure(`${error.response.data.message}`);
    }

    if (!error.response) {
      Notify.failure(`Unable to logout. Error message is "${error.message}"`);
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (!persistedToken) return thunkAPI.rejectWithValue();
    token.set(persistedToken);

    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    console.log('error :>> ', error);

    if (error.response) {
      Notify.failure(`${error.response.data.message}`);
    }

    if (!error.response) {
      Notify.failure(`Unable to refresh. Error message is "${error.message}"`);
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const authOperations = {
  register,
  login,
  logout,
  refreshCurrentUser,
};
