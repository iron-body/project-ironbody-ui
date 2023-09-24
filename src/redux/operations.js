import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import exercises from '../exercises.json';
import filters from '../filters.json';

// axios.defaults.baseURL = "https://iron-body-project-backend.onrender.com/api/";

export const fetchExercises = createAsyncThunk('exercises/data', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/products');
    const exercise = exercises;
    return exercise;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchFilteredExercises = createAsyncThunk('exercises/filter', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/products');
    const filter = filters;
    return filter;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
