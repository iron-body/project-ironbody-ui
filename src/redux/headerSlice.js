import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  valueIconVector: '',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateHeaderValueIconVector(state, action) {
      state.valueIconVector = action.payload;
    },
  },
});

export const { updateHeaderValueIconVector } = headerSlice.actions;
export const headerReducer = headerSlice.reducer;
