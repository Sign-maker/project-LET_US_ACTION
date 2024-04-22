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

const handleAuthRejected = (state, { payload }) => {
  state.isAuthLoading = false;
  // console.log(payload);
  state.error = payload;
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
      state.error = null;
    });
    builder.addCase(logIn.rejected, handleAuthRejected);
    //avatars
    builder.addCase(updateAvatar.pending, handleAuthPending);
    builder.addCase(updateAvatar.fulfilled, (state, { payload }) => {
      state.user.avatarURL = payload;
      state.error = null;
    });
    builder.addCase(updateAvatar.rejected, handleAuthRejected);
    // profile
    builder.addCase(updateProfile.pending, handleAuthPending);
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      state.user = { ...state.user, ...payload.user };
      state.error = null;
    });
    builder.addCase(updateProfile.rejected, handleAuthRejected);
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
      state.error = null;
    });
    builder.addCase(refreshUser.rejected, (state, { payload }) => {
      state.isRefreshing = false;
      state.error = payload;
    });
    //daylyNorms
    builder.addCase(updateMyDailyNorma.pending, handleAuthPending);
    builder.addCase(updateMyDailyNorma.fulfilled, (state, { payload }) => {
      // console.log(payload);
      state.user.dailyNorma = payload.dailyNorma;
      state.error = null;
    });
    builder.addCase(updateMyDailyNorma.rejected, handleAuthRejected);
  },
});
