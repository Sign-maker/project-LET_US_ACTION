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
    totalVolume: null,
    fulfillment: null,
    servingsCount: null,
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
  reducers: {
    setDailyNorma: (state, { payload }) => {
      state.todayStats.dailyNorma = payload;
    },
  },
  extraReducers: builder => {
    //fetchTodayStats
    builder.addCase(fetchTodayStats.pending, state => {
      state.isTodayLoading = true;
    });
    builder.addCase(fetchTodayStats.fulfilled, (state, { payload }) => {
      state.todayStats = { ...state.todayStats, ...payload };
      state.isTodayLoading = false;
      state.error = null;
    });
    builder.addCase(fetchTodayStats.rejected, state => {
      state.isTodayLoading = false;
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
    builder.addCase(fetchMonthStats.rejected, state => {
      state.isMonthLoading = false;
    });
    //deleteWater
    builder.addCase(deleteWater.pending, state => {
      state.isDeleting = true;
    });
    builder.addCase(deleteWater.fulfilled, (state, { payload }) => {
      state.todayStats.dayNotes = state.isDeleting = false;
      state.error = null;
    });
    builder.addCase(deleteWater.rejected, state => {
      state.isDeleting = false;
    });
  },
});
