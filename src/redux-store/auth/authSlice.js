import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
  register,
  updateProfile,
  updateAvatar,
  updateMyDailyNorma,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    gender: null,
    avatarURL: null,
    dailyNorma: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoading: false,
  error: null,
};

const handleAuthPending = state => {
  state.isAuthLoading = true;
};

const handleAuthRejected = state => {
  state.isAuthLoading = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    //register
    builder.addCase(register.pending, handleAuthPending);
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
      state.error = null;
    });
    builder.addCase(register.rejected, handleAuthRejected);
    //login
    builder.addCase(logIn.pending, handleAuthPending);
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isAuthLoading = false;
    });
    builder.addCase(logIn.rejected, handleAuthRejected);
    //avatars
    builder.addCase(updateAvatar.fulfilled, (state, { payload }) => {
      state.user.avatarURL = payload;
    });
    // profile
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      console.log(payload);
      console.log(state.user);
      state.user = { ...state.user, ...payload.user };
    });

    //logout
    builder.addCase(logOut.pending, handleAuthPending);
    builder.addCase(logOut.fulfilled, state => {
      return (state = initialState);
    });
    builder.addCase(logOut.rejected, handleAuthRejected);
    //refresh
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    });
    //daylyNorms
    builder.addCase(updateMyDailyNorma.pending, handleAuthPending);
    builder.addCase(updateMyDailyNorma.fulfilled, (state, { payload }) => {
      state.user.dailyNorma = payload.user.dailyNorma;
    });
    builder.addCase(updateMyDailyNorma.rejected, handleAuthRejected);
  },
});
