import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

const updateParams = createAsyncThunk('calculateNorms/calculate', async (paramsData, thunkAPI) => {
  try {
    console.log('paramsData :>> ', paramsData);
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.accessToken;
    // console.log('persistedToken :>> ', persistedToken);

    // const axiosToken = axios.defaults.headers.common.Authorization;
    // console.log('axiosToken :>> ', axiosToken);

    const response = await axios.post('calculateNorms/calculate', paramsData);
    // console.log('response :>> ', response);

    Notify.success('response params succesfull');
    return response;
  } catch (error) {
    console.log('error :>> ', error);

    if (error.response) {
      Notify.failure(`${error.response.data.message}`);
    }

    if (!error.response) {
      Notify.failure(`Response failure with message "${error.message}"`);
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const paramsOperations = {
  updateParams,
};
