import { createAsyncThunk } from '@reduxjs/toolkit';
import axios1 from 'axios';
import { toastFulfilled } from 'components/servises/UserNotification';

const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;

export const axios = axios1.create({
  baseURL,
});

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
      toastFulfilled('Registration successful!');
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
      // toastFulfilled('You have successfully logged into your account!');
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
      toastFulfilled('Your data has been successfully updated!');
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
      toastFulfilled('Your avatar has been successfully updated!');
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
    // const state = thunkAPI.getState();
    // console.log(state);

    try {
      const { data } = await axios.patch('users/waterrate', dailyNorma);

      toastFulfilled('Your daily water norma has been successfully updated!');

      return data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
