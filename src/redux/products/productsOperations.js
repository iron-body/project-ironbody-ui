import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const baseURL = 'https://iron-body-project-backend.onrender.com/';

export const getProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}api/products`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getCategoryProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `${baseURL}api/products?category=${query}&recommended=all`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getAllFillterProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async ({ categoryQuery = '', serchParams = '' }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${baseURL}api/products?category=${categoryQuery}&title=${serchParams}&recommended=all`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getAllFillteredProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async (
    {
      bloodType = '',
      recommendedQuery = 'all ',
      categoryQuery = '',
      serchParams = '',
    },
    thunkAPI,
  ) => {
    try {
      const response = await axios.get(
        `${baseURL}api/products?bloodtype=${bloodType}&recommended=${recommendedQuery}&category=${categoryQuery}&title=${serchParams}`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getCategoriesProductsThunk = createAsyncThunk(
  'category/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}api/categories`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addProductThunk = createAsyncThunk(
  'product/addProduct',
  async (product, thunkAPI) => {
    try {
      const response = await axios.post('/products', { ...product });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteProductThunk = createAsyncThunk(
  'products/deleteProduct',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(`/products/${productId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
