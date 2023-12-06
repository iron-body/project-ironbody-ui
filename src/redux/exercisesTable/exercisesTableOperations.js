import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getExercisesTableArray = createAsyncThunk(
  'getExercisesTableArray',
  async (dateInStore, thunkAPI) => {
    try {
      const result = axios(`exercises/byDate?${dateInStore}`);

      console.log(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
