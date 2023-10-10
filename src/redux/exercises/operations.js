import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://iron-body-project-backend.onrender.com/api/';

export const fetchExercises = createAsyncThunk(
  'exercises/data',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.accessToken;
      const response = await axios.get('exercises', {
        headers: {
          Authorization: `Bearer ${persistedToken}`,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchFilteredExercises = createAsyncThunk(
  'exercises/filter',
  async (dinamicFilter, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.accessToken;
      const response = await axios.get('filters/filtered?', {
        headers: {
          Authorization: `Bearer ${persistedToken}`,
        },      
        
        params: dinamicFilter,
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchUserExercise = createAsyncThunk(
  'exercises/fetchUserExercise',
  async (requestData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.accessToken;
      const response = await axios.post('exercises', requestData,
      {headers: {
        Authorization: `Bearer ${persistedToken}`,
      },   
     });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      // console.log(error);
      if (error.response) {
        Notify.failure(`${error.response.data.message}`);
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
