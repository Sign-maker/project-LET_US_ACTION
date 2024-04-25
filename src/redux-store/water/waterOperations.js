import { createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../auth/authOperations';

const getTodayStart = () => {
  const dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);
  return dayStart;
};

export const fetchTodayStats = createAsyncThunk(
  'water/fetchTodayStats',
  async (_, thunkAPI) => {
    try {
      const params = { todayStart: getTodayStart() };
      const { data } = await axios.get('/water/today', { params });
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const fetchMonthStats = createAsyncThunk(
  'water/fetchMonthStats',
  async (startOfMonth, thunkAPI) => {
    try {
      const params = { startOfMonth };
      const { data } = await axios.get('/water/month', { params });
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
      const params = { todayStart: getTodayStart() };
      const { data } = await axios.post(`/water`, waterNote, { params });
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
      const params = { todayStart: getTodayStart() };
      const { data } = await axios.patch(
        `/water/${_id}`,
        {
          waterVolume,
          date,
        },
        { params }
      );
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
      const params = { todayStart: getTodayStart() };
      const { data } = await axios.delete(`/water/${_id}`, { params });
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
