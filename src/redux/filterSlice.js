import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  value: '',
  selectedCategory: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      const { value, selectedCategory } = action.payload;
      state.value = value;
      state.selectedCategory = selectedCategory;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
