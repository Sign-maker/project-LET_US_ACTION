import { createAsyncThunk } from '@reduxjs/toolkit';
import axios1 from 'axios';

const baseURL = 'https://water-tracker-api-6z23.onrender.com/api';
// const baseURL = 'http://localhost:8000/api';

export const axios = axios1.create({
  baseURL,
});

const getTodayStart = () => {
  const dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);
  return dayStart;
};

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signin', credentials);

      setAuthHeader(data.token);

      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    clearAuthHeader();
    return data;
  } catch (error) {
    const errorMessage = error.response.data.message;
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/profile', credentials);
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      const { data } = await axios.patch('/users/avatars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return data.avatarURL;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Faled to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateMyDailyNorma = createAsyncThunk(
  'auth/dailyNorma',
  async (dailyNorma, thunkAPI) => {
    try {
      const params = { todayStart: getTodayStart() };
      const { data } = await axios.patch('users/waterrate', dailyNorma, {
        params,
      });

      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
