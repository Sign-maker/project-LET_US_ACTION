import { createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../auth/authOperations';

export const fetchTodayStats = createAsyncThunk(
  'water/fetchTodayStats',
  async (_, thunkAPI) => {
    try {
      const params = {
        date: new Date(),
      };
      const { data } = axios.get('/water/today', { params });
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
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
      const { data } = axios.get('/water/month', { params });
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = axios.delete(`/water/${id}`);
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
