import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  deleteWater,
  fetchMonthStats,
  fetchTodayStats,
  updateWater,
} from './waterOperations';
import {
  calcFulfillment,
  calcServingsCount,
  calcTotalVolume,
} from 'helpers/statsHelpers';

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
  isWaterUpdating: false,
  error: null,
};

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    updateByDailyNorma: (state, { payload }) => {
      state.todayStats.dailyNorma = payload;
      if (state.todayStats.dayNotes.length > 0) {
        state.todayStats.fulfillment = calcFulfillment(
          state.todayStats.totalVolume,
          payload
        );
      }
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
      state.isWaterUpdating = true;
    });
    builder.addCase(deleteWater.fulfilled, (state, { payload }) => {
      state.todayStats.dayNotes = state.isWaterUpdating = false;
      state.error = null;
    });
    builder.addCase(deleteWater.rejected, (state, { payload }) => {
      state.isDeleting = false;
      state.error = payload;
    });
  },
});
