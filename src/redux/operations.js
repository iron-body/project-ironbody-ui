import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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



