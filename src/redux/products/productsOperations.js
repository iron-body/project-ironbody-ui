import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://iron-body-project-backend.onrender.com/';

export const getProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('api/products');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const filterProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `api/products?title=${query}&recommended=all`,
      );
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
        `api/products?category=${query}&recommended=all`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getAllFillterProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async (categoryQuery, titleQuery, thunkAPI) => {
    try {
      const response = await axios.get(
        `api/products?category=${categoryQuery}&title=${titleQuery}&recommended=all`,
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
      const response = await axios.get(`api/categories`);
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
