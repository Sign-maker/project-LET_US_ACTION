import { createSlice } from '@reduxjs/toolkit';
import { fetchMonthStats, fetchTodayStats } from './waterOperations';

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
    builder.addCase(fetchTodayStats.fulfilled, (state, { payload }) => {});
    builder.addCase(fetchTodayStats.rejected, state => {
      state.isTodayLoading = false;
    });
    //fetchMonthStats
    builder.addCase(fetchMonthStats.pending, state => {
      state.isMonthLoading = true;
    });
    builder.addCase(fetchMonthStats.fulfilled, (state, { payload }) => {});
    builder.addCase(fetchMonthStats.rejected, state => {
      state.isMonthLoading = false;
    });
  },
});
