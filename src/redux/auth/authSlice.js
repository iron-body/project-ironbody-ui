import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './authOperations';
// import { updateOperations } from '../update/updateOperations';
const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
  },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.isLoading = true;
    },
    [authOperations.register.rejected](state) {
      state.isLoading = false;
      state.accessToken = null;
      state.isLoggedIn = false;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = true;
    },
    [authOperations.login.pending](state) {
      state.isLoading = true;
    },
    [authOperations.login.rejected](state) {
      state.isLoading = false;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = true;
    },

    [authOperations.logout.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.accessToken = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [authOperations.logout.rejected](state) {
      state.accessToken = null;
      state.isLoggedIn = true;
    },
    [authOperations.refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = true;
    },
    [authOperations.refreshCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.refreshCurrentUser.rejected](state) {
      state.isRefreshing = false;
      state.accessToken = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },

    // [updateOperations.update.fulfilled](state, action) {
    //   (state.user = Object.assign(state.user, action.meta.arg)), (state.isRefreshing = true);
    //   // state.user = action.payload;
    //   // state.isRefreshing = true;
    // },
  },
});

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.accessToken;
export const selectUsername = state => state.auth.user?.name;
export const selectAvatarURL = state => state.auth.user.avatarURL;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const authReducer = authSlice.reducer;
