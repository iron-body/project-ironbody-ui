import { createSlice } from '@reduxjs/toolkit';
import { getExercisesTableArray } from './exercisesTableOperations';

const exercisesSliceState = {
  exercisesTableItems: [],
  isLoading: false,
  isError: null,
};
const exercisesTableSlice = createSlice({
  name: 'exercisesTable',
  initialState: exercisesSliceState,
  extraReducers: {
    [getExercisesTableArray.pending](state, action) {
      state.isLoading = true;
    },
    [getExercisesTableArray.fulfilled](state, action) {
      state.isLoading = false;
      state.isError = null;
      state.exercisesTableItems = action.payload;
    },
    [getExercisesTableArray.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const exercisesTableReducer = exercisesTableSlice.reducer;
