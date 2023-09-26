import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


const update = createAsyncThunk('user/update', async (_, thunkAPI) => {
       try {
         const response = await axios.post('/auth');
         return response.data;
       } catch (error) {
         thunkAPI.rejectWithValue(error.message);
       }
})


export const updateOperations = {
  update,
};
