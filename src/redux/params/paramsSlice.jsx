import { createSlice } from '@reduxjs/toolkit';
import { paramsOperations } from './paramsOperations';

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
  isUpdated: false,
};

export const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    updateAll(state, action) {
      state.params = action.payload;
    },
  },
  extraReducers: {
    // [paramsOperations.updateParams.pending](state, action) {},
    [paramsOperations.updateParams.rejected](state) {
      state.isUpdated = false;
    },
    [paramsOperations.updateParams.fulfilled](state, action) {
      state.params = action.payload;
      state.isUpdated = true;
    },
  },
});

export const { updateAll } = paramsSlice.actions;
export const paramsReducer = paramsSlice.reducer;

export const selectParamsValues = state => state.params.params;
export const selectParamsValueHeight = state => state.params.params.height;
