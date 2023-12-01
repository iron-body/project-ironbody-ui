import { createSlice } from '@reduxjs/toolkit';
import { getProductsTableArray, deleteProductTableArray } from './productsTableOperations';

const productsTableInitialState = {
  productsTableArray: [],
  isLoading: false,
  isError: null,
};

const productsTableSlice = createSlice({
  name: 'productsTable',
  initialState: productsTableInitialState,
  extraReducers: {
    [getProductsTableArray.pending](state, action) {
      state.isLoading = true;
    },
    [getProductsTableArray.fulfilled](state, action) {
      state.isLoading = false;
      state.isError = null;
      state.productsTableArray = action.payload;
    },
    [getProductsTableArray.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
    [deleteProductTableArray.pending](state, action) {
      state.isLoading = true;
    },
    [deleteProductTableArray.fulfilled](state, action) {
      state.isLoading = false;
      state.isError = false;
      const indx = state.productsTableArray.findIndex(product => product._id === action.payload);
      state.productsTableArray.splice(indx, 1);
    },
    [deleteProductTableArray.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const productsTableReducer = productsTableSlice.reducer;
