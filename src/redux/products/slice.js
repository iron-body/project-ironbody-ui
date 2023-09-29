import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getProductsThunk,
  addProductThunk,
  deleteProductThunk,
  getCategoriesProductsThunk,
  // getCategoryProductsThunk,
  // getAllFillterProductsThunk,
  getAllFillteredProductsThunk,
  getFillterRecommendedProductsThunk,
} from './productsOperations';

import { productsInitialState } from './initialProducts';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const thunksArr = [
  addProductThunk,
  getProductsThunk,
  deleteProductThunk,
  getCategoriesProductsThunk,
  getAllFillteredProductsThunk,
  getFillterRecommendedProductsThunk,
];
const helpFn = type => thunksArr.map(el => el[type]);
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
  // state.isSuccessPost = true;
};

const handlePending = state => {
  state.isLoading = true;
  // state.isSuccessPost = false;
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledGetCategory = (state, { payload }) => {
  state.categories = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
  // state.isSuccessPost = true;
};

const handleFulfilledDel = (state, { payload }) => {
  state.items = state.items.filter(el => el.id !== payload.id);
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  // state.isSuccessPost = false;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getProductsThunk.fulfilled, handleFulfilledGet)
      .addCase(addProductThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteProductThunk.fulfilled, handleFulfilledDel)
      .addCase(getCategoriesProductsThunk.fulfilled, handleFulfilledGetCategory)

      .addMatcher(isAnyOf(...helpFn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...helpFn(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...helpFn(FULFILLED)), handleFulfilled);
  },
});

export const productsReducer = productsSlice.reducer;
