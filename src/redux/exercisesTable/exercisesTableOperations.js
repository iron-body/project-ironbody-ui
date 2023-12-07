import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getExercisesTableArray = createAsyncThunk(
  'getExercisesTableArray',
  async (dateInStore, thunkAPI) => {
    try {
      // const result = axios(`exercises/byDate?${dateInStore}`);
      const result = await axios(`http://localhost:3000/api/exercises/byDate?date=${dateInStore}`);

      // console.log(result);
      const {
        data: { dataList },
      } = result;
      return dataList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
