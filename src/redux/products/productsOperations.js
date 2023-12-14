import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const baseURL = 'https://iron-body-project-backend.onrender.com/';

export const getProductsThunk = createAsyncThunk('products/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${baseURL}api/products`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const getCategoriesProductsThunk = createAsyncThunk(
  'category/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}api/products/categories`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCategoryProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}api/products?category=${query}&recommended=all`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAllFillteredProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async ({ categoryQuery = '', searchParams = '' }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${baseURL}api/products?category=${categoryQuery}&title=${searchParams}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getFillterRecommendedProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async ({ categoryQuery = '', searchParams = '', recommendedQuery = '' }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${baseURL}api/products?category=${categoryQuery}&title=${searchParams}&isNotAllowed=${recommendedQuery}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addProductThunk = createAsyncThunk(
  'products/addProduct',
  async (product, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}api/products/userproducts`, {
        // const response = await axios.post(`http://localhost:3000/api/products/userproducts`, {
        ...product,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
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
  }
);
