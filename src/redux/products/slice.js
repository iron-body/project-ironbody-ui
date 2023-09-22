import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getProductsThunk,
  addProductThunk,
  deleteProductThunk,
} from './productsOperations';

import { productsInitialState } from './initialProducts';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const thunksArr = [addProductThunk, getProductsThunk, deleteProductThunk];
const helpFn = type => thunksArr.map(el => el[type]);
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};
const handleFulfilledDel = (state, { payload }) => {
  state.items = state.items.filter(el => el.id !== payload.id);
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
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

      .addMatcher(isAnyOf(...helpFn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...helpFn(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...helpFn(FULFILLED)), handleFulfilled);
  },
});

export const productsReducer = productsSlice.reducer;
