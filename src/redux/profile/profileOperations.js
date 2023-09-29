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

    // console.log('state :>> ', state);
    const persistedToken = state.auth.accessToken;
    const profileData = state.profile.profile;
    console.log('profileData :>> ', profileData);

    const modifiedProfileData = {
      birthday: profileData?.birthday,
      blood: profileData?.blood,
      currentWeight: profileData?.currentWeight,
      desiredWeight: profileData?.desiredWeight,
      height: profileData?.height,
      levelActivity: profileData?.levelActivity,
      sex: profileData?.sex,
    };
    console.log('modifiedProfileData :>> ', modifiedProfileData);

    const response = await axios.patch('users/updateParamsUser', modifiedProfileData, {
      headers: {
        Authorization: `Bearer ${persistedToken}`,
      },
    });

    const modifiedProfileName = {
      name: profileData?.name,
    };

    const response2 = await axios.patch('users/updateProfile', modifiedProfileName, {
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

export const profileOperations = { profileData, profileDataUpdate };
