import { createSlice } from '@reduxjs/toolkit';
import { profileOperations } from '../../redux/profile/profileOperations';

const initialState = {
  profile: {
    name: null,
    email: null,
    _id: null,
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    blood: null,
    sex: null,
    levelActivity: null,
    owner: {
      _id: null,
      name: null,
      email: null,
    },
  },
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile(state, action) {
      //   console.log(action.payload);
      state.profile = { ...state.profile, ...action.payload };
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
      state.profile = action.payload;
      state.isLoading = false;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;

export const selectProfileData = state => state.profile.profile;
export const getIsProfileLoading = state => state.profile.isLoading;
