import { createSlice } from '@reduxjs/toolkit';
import {
  // logIn,
  // logOut,
  // refreshUser,
  register,
  // updateProfile,
  // updateName,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthLoading: false,
};

// const handlePending = state => {
//   state.isAuthLoading = true;
// };

// const handleRejected = state => {
//   state.isAuthLoading = false;
// };

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    //register
    // builder.addCase(register.pending, handlePending);
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = false;
      state.isAuthLoading = false;
    });
    // builder.addCase(register.rejected, handleRejected);
    // //login
    // builder.addCase(logIn.pending, handlePending);
    // builder.addCase(logIn.fulfilled, (state, { payload }) => {
    //   state.user = payload.user;
    //   state.token = payload.token;
    //   state.isLoggedIn = true;
    //   state.isAuthLoading = false;
    // });
    // builder.addCase(logIn.rejected, handleRejected);
    // //avatars
    // builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
    //   state.user.avatarURL = payload;
    // });
    // //updateName
    // builder.addCase(updateName.fulfilled, (state, { payload }) => {
    //   state.user.name = payload;
    // });
    // //logout
    // builder.addCase(logOut.pending, handlePending);
    // builder.addCase(logOut.fulfilled, state => {
    //   return (state = initialState);
    // });
    // builder.addCase(logOut.rejected, handleRejected);
    // //refresh
    // builder.addCase(refreshUser.pending, state => {
    //   state.isRefreshing = true;
    // });
    // builder.addCase(refreshUser.fulfilled, (state, { payload }) => {
    //   state.user = payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // });
    // builder.addCase(refreshUser.rejected, state => {
    //   state.isRefreshing = false;
    // });
  },
});
