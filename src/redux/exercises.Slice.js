import { createSlice } from '@reduxjs/toolkit';
import { fetchExercises, fetchFilteredExercises } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const exercisesSlice = createSlice({
  name: 'exercises',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filtered: [],
  },
  extraReducers: {
    [fetchExercises.pending]: handlePending,
    [fetchExercises.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [fetchFilteredExercises.pending]: handlePending,
    [fetchFilteredExercises.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.filtered = action.payload;
    },
  },
});

export const exercisesReducer = exercisesSlice.reducer;
