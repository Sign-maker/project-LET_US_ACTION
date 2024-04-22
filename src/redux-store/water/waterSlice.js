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
  monthNotes: [],
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
    resetValues: state => {
      return (state = initialState);
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
      state.monthNotes = payload.month;
      state.isMonthLoading = false;
      state.error = null;
    });
    builder.addCase(fetchMonthStats.rejected, state => {
      state.isMonthLoading = false;
    });
    //addWater
    builder.addCase(addWater.pending, state => {
      state.isWaterUpdating = true;
    });
    builder.addCase(addWater.fulfilled, (state, { payload }) => {
      state.todayStats.dayNotes = [...state.todayStats.dayNotes, payload];
      state.todayStats.totalVolume = calcTotalVolume(state.todayStats.dayNotes);
      state.todayStats.fulfillment = calcFulfillment(
        state.todayStats.totalVolume,
        state.todayStats.dailyNorma
      );
      state.todayStats.servingsCount = calcServingsCount(
        state.todayStats.dayNotes
      );
      state.isWaterUpdating = false;
      state.error = null;
    });
    builder.addCase(addWater.rejected, state => {
      state.isWaterUpdating = false;
    });
    //updateWater
    builder.addCase(updateWater.pending, state => {
      state.isWaterUpdating = true;
    });
    builder.addCase(updateWater.fulfilled, (state, { payload }) => {
      const idx = state.todayStats.dayNotes.findIndex(
        waterNote => waterNote._id === payload._id
      );
      if (idx !== -1) {
        state.todayStats.dayNotes[idx] = payload;
        state.todayStats.totalVolume = calcTotalVolume(
          state.todayStats.dayNotes
        );
        state.todayStats.fulfillment = calcFulfillment(
          state.todayStats.totalVolume,
          state.todayStats.dailyNorma
        );
        state.todayStats.servingsCount = calcServingsCount(
          state.todayStats.dayNotes
        );
      }

      state.isWaterUpdating = false;
      state.error = null;
    });
    builder.addCase(updateWater.rejected, state => {
      state.isWaterUpdating = false;
    });
    //deleteWater
    builder.addCase(deleteWater.pending, state => {
      state.isWaterUpdating = true;
    });
    builder.addCase(deleteWater.fulfilled, (state, { payload }) => {
      state.todayStats.dayNotes = state.todayStats.dayNotes.filter(
        waterNote => waterNote._id !== payload._id
      );

      state.todayStats.totalVolume = calcTotalVolume(state.todayStats.dayNotes);
      state.todayStats.fulfillment = calcFulfillment(
        state.todayStats.totalVolume,
        state.todayStats.dailyNorma
      );
      state.todayStats.servingsCount = calcServingsCount(
        state.todayStats.dayNotes
      );
      state.isWaterUpdating = false;
      state.error = null;
    });
    builder.addCase(deleteWater.rejected, state => {
      state.isWaterUpdating = false;
    });
  },
});
