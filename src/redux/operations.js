import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import exercises from '../exercises.json';
import filters from '../filters.json';

axios.defaults.baseURL = "https://iron-body-project-backend.onrender.com/api/";

export const fetchExercises = createAsyncThunk('exercises/data', async (_, thunkAPI) => {
  try {
    const response = await axios.get('exercises');
    console.log(response.data);
    const exercise = exercises;
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchFilteredExercises = createAsyncThunk('exercises/filter', async (dinamicFilter, thunkAPI) => {
  try {
    const response = await axios.get('filters/filtered?', {params:dinamicFilter});
    console.log(dinamicFilter);
    console.log(response.data);
    // const filter = filters;
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});



