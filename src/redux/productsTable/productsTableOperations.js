import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductsTableArray = createAsyncThunk(
  'getProductsTableArray',
  async (date, thunkAPI) => {
    try {
      const result = await axios.get(
        `http://localhost:3000/api/products/userproducts?date=${date}`
      );

      // const result = await axios.get(`/products/userproducts?date=${date}`);

      const {
        data: { dataList },
      } = result;

      return dataList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProductTableArray = createAsyncThunk(
  'deleteProductTalbeArray',
  async ({ delId, dateInStore }, thunkAPI) => {
    try {
      const result = await axios.delete(
        `http://localhost:3000/api/products/userproducts/${delId}?date=${dateInStore}`
      );
      console.log(result);
      const {
        data: { id },
      } = result;
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
