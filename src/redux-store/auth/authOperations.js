import { createAsyncThunk } from '@reduxjs/toolkit';
import axios1 from 'axios';
import {
  toastFulfilled,
  toastRejected,
} from 'components/servises/UserNotification';

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
      switch (error.response) {
        case 409:
          toastRejected(
            `This email is already in use by another user. Please try a different email!`
          );
          return thunkAPI.rejectWithValue(error.massage);
        case 400:
          toastRejected(`The password must contain at least 8 characters`);
          return thunkAPI.rejectWithValue(error.massage);

        default:
          return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signin', credentials);
      toastFulfilled('You have successfully logged into your account!');
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      toastRejected('Something went wrong, please try again later!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    clearAuthHeader();
    return data;
  } catch (error) {
    toastRejected('Something went wrong, please try again later!');
    return thunkAPI.rejectWithValue(error.message);
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
      toastRejected('Something went wrong, please try again later!');
      return thunkAPI.rejectWithValue(error.message);
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
      toastRejected('Something went wrong, please try again later!');
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateMyDailyNorma = createAsyncThunk(
  'auth/dailyNorma',
  async (dailyNorma, thunkAPI) => {
    try {
      const data = await axios.patch('users/waterrate', dailyNorma);
      // console.log(data);
      toastFulfilled(
        'Your daily water allowance has been successfully updated!'
      );
      return data.data.dailyNorma;
    } catch (error) {
      toastRejected('Something went wrong, please try again later!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
