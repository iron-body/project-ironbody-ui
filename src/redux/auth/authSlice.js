import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.isLoading = true;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [authOperations.login.pending](state) {
      state.isLoading = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [authOperations.logout.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.accessToken = null;
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected](state) {
      state.accessToken = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.refreshCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.refreshCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUsername = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const authReducer = authSlice.reducer;
