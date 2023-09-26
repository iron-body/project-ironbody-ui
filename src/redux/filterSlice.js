import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  value: '',
  selectedCategory: '',
  recommendedFilter: 'All',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      const { value, selectedCategory, recommendedValue } = action.payload;
      state.value = value;
      state.selectedCategory = selectedCategory;
      state.recommendedFilter = recommendedValue;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
