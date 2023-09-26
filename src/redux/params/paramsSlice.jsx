import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  params: {
    height: undefined,
    currentWeight: undefined,
    desiredWeight: undefined,
    birthday: undefined,

    blood: 1,
    sex: 'male',
    levelActivity: 1,
  },
};

export const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    // updateAll(state, action) {
    //   const payload = action.payload;

    //   const keys = Object.keys(payload);
    //   const filterdValues = {};

    //   for (const key of keys) {
    //     if (payload[key] === '') {
    //       return;
    //     }
    //     if (payload[key] !== undefined) {
    //       filterdValues[key] = payload[key];
    //     }
    //   }

    //   state.params = { ...state.params, ...filterdValues };
    //   },
    updateAll(state, action) {
      state.params = action.payload;
    },
  },
});

export const { updateStepOne, updateStepTwo, updateAll } = paramsSlice.actions;
export const paramsReducer = paramsSlice.reducer;

export const selectParamsValues = state => state.params.params;
