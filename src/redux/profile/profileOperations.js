import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

const profileData = createAsyncThunk('profile/userdata', async (profileData, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    const response = await axios.get('users/userData', {
      headers: {
        Authorization: `Bearer ${persistedToken}`,
      },
    });
    return response.data[0];
  } catch (error) {
    console.log('error :>> ', error);

    if (error.response) {
      Notify.failure(`Get profile data failure with message "${error.response.data.message}"`);
    }

    if (!error.response) {
      Notify.failure(`Get profile data failure with message "${error.message}"`);
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

const profileDataUpdate = createAsyncThunk('profile/update', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    const profileData = state.profile;
    const response = await axios.post('users/userData', profileData, {
      headers: {
        Authorization: `Bearer ${persistedToken}`,
      },
    });
    return response.data[0];
  } catch (error) {
    if (error.response) {
      Notify.failure(`Set profile data failure with message "${error.response.data.message}"`);
    }

    if (!error.response) {
      Notify.failure(`Set profile data failure with message "${error.message}"`);
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const profileOperations = { profileData };
