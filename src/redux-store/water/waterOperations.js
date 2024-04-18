import { createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../auth/authOperations';
import { toastRejected } from 'components/servises/UserNotification';

export const fetchTodayStats = createAsyncThunk(
  'water/fetchTodayStats',
  async (_, thunkAPI) => {
    try {
      const { data } = axios.get('/water/today');
      return data;
    } catch (error) {
      toastRejected('Something went wrong, please try again later!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
