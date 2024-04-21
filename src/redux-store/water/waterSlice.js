import { createSlice } from '@reduxjs/toolkit';
import {
  deleteWater,
  fetchMonthStats,
  fetchTodayStats,
} from './waterOperations';

const initialState = {
  todayStats: {
    dailyNorma: null,
    dayNotes: [],
    totalAmount: null,
    fulfillment: null,
  },
  monthStats: {
    currentMonth: null,
    monthNotes: [],
  },
  isTodayLoading: false,
  isMonthLoading: false,
  isDeleting: false,
  error: null,
};

export const waterSlice = createSlice({
  name: 'water',
  initialState,

  extraReducers: builder => {
    //fetchTodayStats
    builder.addCase(fetchTodayStats.pending, state => {
      state.isTodayLoading = true;
    });
    builder.addCase(fetchTodayStats.fulfilled, (state, { payload }) => {
      state.todayStats = payload.todayStats;
      state.isTodayLoading = false;
      state.error = null;
    });
    builder.addCase(fetchTodayStats.rejected, (state, { payload }) => {
      state.isTodayLoading = false;
      state.error = payload;
    });
    //fetchMonthStats
    builder.addCase(fetchMonthStats.pending, state => {
      state.isMonthLoading = true;
    });
    builder.addCase(fetchMonthStats.fulfilled, (state, { payload }) => {
      state.monthStats = payload.monthStats;
      state.isMonthLoading = false;
      state.error = null;
    });
    builder.addCase(fetchMonthStats.rejected, (state, { payload }) => {
      state.isMonthLoading = false;
      state.error = payload;
    });
    //deleteWater
    builder.addCase(deleteWater.pending, state => {
      state.isDeleting = true;
    });
    builder.addCase(deleteWater.fulfilled, (state, { payload }) => {
      state.todayStats.dayNotes = state.isDeleting = false;
      state.error = null;
    });
    builder.addCase(deleteWater.rejected, (state, { payload }) => {
      state.isDeleting = false;
      state.error = payload;
    });
  },
});
