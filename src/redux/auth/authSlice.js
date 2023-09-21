import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './authOperations';
import { updateOperations } from '../update/updateOperations';
const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logout.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
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

    [updateOperations.update.fulfilled](state, action) {
       state.user = Object.assign(state.user, action.meta.arg), (state.isRefreshing = true);
      // state.user = action.payload;
      // state.isRefreshing = true;
    },
  },
});

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUsername = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const authReducer = authSlice.reducer;
