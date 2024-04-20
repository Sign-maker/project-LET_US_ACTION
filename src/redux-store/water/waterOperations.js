import { createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../auth/authOperations';
import { toastRejected } from 'components/servises/UserNotification';

export const fetchTodayStats = createAsyncThunk(
  'water/fetchTodayStats',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/water/today');
      return data;
    } catch (error) {
      toastRejected('Something went wrong, please try again later!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMonthStats = createAsyncThunk(
  'water/fetchMonthStats',
  async (currentMonth, thunkAPI) => {
    try {
      const params = {
        currentMonth,
      };
      const { data } = await axios.get('/water/month', { params });
      return data;
    } catch (error) {
      toastRejected('Something went wrong, please try again later!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/water/${id}`);
      return data;
    } catch (error) {
      toastRejected('Something went wrong, please try again later!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
