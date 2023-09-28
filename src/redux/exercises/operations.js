import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = "https://iron-body-project-backend.onrender.com/api/";

export const fetchExercises = createAsyncThunk('exercises/data', async (_, thunkAPI) => {
  try {
    const response = await axios.get('exercises');
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchFilteredExercises = createAsyncThunk('exercises/filter', async (dinamicFilter, thunkAPI) => {
  try {
    const response = await axios.get('filters/filtered?', {params:dinamicFilter});
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchUserExercise = createAsyncThunk('exercises', async (requestData, thunkAPI) => {
  try {
    const response = await axios.post('exercises', requestData);
     return response.data;
   
  } catch (error) {
    console.log(error);
    if (error.response) {
      Notify.failure(`${error.response.data.message}`);
    }
    return thunkAPI.rejectWithValue(e.message);
  }
});



