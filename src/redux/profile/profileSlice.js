import { createSlice } from '@reduxjs/toolkit';
import { profileOperations } from '../../redux/profile/profileOperations';

const initialState = {
  profile: {
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    blood: null,
    sex: null,
    levelActivity: null,
  },
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile(state, action) {
      const {
        birthday,
        blood,
        currentWeight,
        desiredWeight,
        levelActivity,
        sex,
        height,
        email,
        name,
        calorieNorm,
        sportTimeNorm,
      } = action.payload;
      // state.profile = { ...state.profile, ...action.payload };
      state.profile = {
        ...state.profile,
        birthday,
        blood,
        currentWeight,
        desiredWeight,
        levelActivity,
        sex,
        height,
        email,
        name,
        calorieNorm,
        sportTimeNorm,
      };
    },
  },
  extraReducers: {
    [profileOperations.profileData.pending](state, action) {
      state.isLoading = true;
    },
    [profileOperations.profileData.rejected](state, action) {
      state.isLoading = false;
    },
    // [profileOperations.profileData.rejected](state) {},
    [profileOperations.profileData.fulfilled](state, action) {
      const {
        birthday,
        blood,
        currentWeight,
        desiredWeight,
        levelActivity,
        sex,
        height,
        email,
        name,
        calorieNorm,
        sportTimeNorm,
      } = action.payload;
      state.profile = {
        ...state.profile,
        birthday,
        blood,
        currentWeight,
        desiredWeight,
        levelActivity,
        sex,
        height,
        email,
        name,
        calorieNorm,
        sportTimeNorm,
      };
      state.isLoading = false;
    },
    [profileOperations.profileDataUpdate.pending](state, action) {
      state.isLoading = true;
    },
    [profileOperations.profileDataUpdate.rejected](state, action) {
      state.isLoading = false;
    },
    [profileOperations.profileDataUpdate.fulfilled](state, action) {
      state.isLoading = false;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;

export const selectProfileData = state => state.profile.profile;
export const getIsProfileLoading = state => state.profile.isLoading;
