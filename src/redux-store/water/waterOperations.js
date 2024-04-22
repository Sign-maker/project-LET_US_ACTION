import { createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../auth/authOperations';

export const fetchTodayStats = createAsyncThunk(
  'water/fetchTodayStats',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/water/today');
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
    //2024-04
    try {
      const { data } = await axios.get(`/water/month/${currentMonth}`);
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (waterNote, thunkAPI) => {
    try {
      const { data } = await axios.post('/water', waterNote);
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateWater = createAsyncThunk(
  'water/updateWater',
  async (waterNote, thunkAPI) => {
    const { _id, waterVolume, date } = waterNote;
    try {
      const { data } = await axios.patch(`/water/${_id}`, {
        waterVolume,
        date,
      });
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/delete',
  async (waterNote, thunkAPI) => {
    const { _id } = waterNote;
    try {
      const { data } = await axios.delete(`/water/${_id}`);
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
