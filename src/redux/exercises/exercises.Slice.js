import { createSlice } from '@reduxjs/toolkit';
import { fetchExercises, fetchFilteredExercises, fetchUserExercise } from './operations';

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
    userExercise: null
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

    [fetchUserExercise.pending]: handlePending,
    [fetchUserExercise.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.userExercise = action.payload;
    },
  },
});

export const exercisesReducer = exercisesSlice.reducer;
