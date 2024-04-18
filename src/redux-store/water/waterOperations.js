import { createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../auth/authOperations';

export const fetchTodayStats = createAsyncThunk(
  'water/fetchTodayStats',
  async (_, thunkAPI) => {
    try {
      const { data } = axios.get('/water/today');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
