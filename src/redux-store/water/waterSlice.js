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

const isDateToday = date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const noteDate = new Date(date);

  return noteDate.getTime() >= today.getTime() &&
    noteDate.getTime() < tomorrow.getTime()
    ? true
    : false;
};

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    updateByDailyNorma: (state, { payload }) => {
      const idx = state.monthNotes.findIndex(({ date }) => isDateToday(date));
      if (idx !== -1) {
        state.monthNotes[idx].dailyNorma = payload;
        state.monthNotes[idx].fulfillment = calcFulfillment(
          state.monthNotes[idx].totalVolume,
          payload
        );
      }

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
      state.todayStats = { ...payload };
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
      state.monthNotes = payload.month;
      state.isMonthLoading = false;
      state.error = null;
    });
    builder.addCase(fetchMonthStats.rejected, (state, { payload }) => {
      state.isMonthLoading = false;
      state.error = payload;
    });
    //addWater
    builder.addCase(addWater.pending, state => {
      state.isWaterUpdating = true;
    });
    builder.addCase(addWater.fulfilled, (state, { payload }) => {
      state.todayStats.dayNotes = [...state.todayStats.dayNotes, payload];
      const totalVolume = calcTotalVolume(state.todayStats.dayNotes);
      state.todayStats.totalVolume = totalVolume;

      const fulfillment = calcFulfillment(
        state.todayStats.totalVolume,
        state.todayStats.dailyNorma
      );
      state.todayStats.fulfillment = fulfillment;

      const servingsCount = calcServingsCount(state.todayStats.dayNotes);
      state.todayStats.servingsCount = servingsCount;

      const idx = state.monthNotes.findIndex(({ date }) => isDateToday(date));
      if (idx !== -1) {
        state.monthNotes[idx].totalVolume = totalVolume;
        state.monthNotes[idx].fulfillment = fulfillment;
        state.monthNotes[idx].servingsCount = servingsCount;
      }
      state.isWaterUpdating = false;
      state.error = null;
    });
    builder.addCase(addWater.rejected, (state, { payload }) => {
      state.isWaterUpdating = false;
      state.error = payload;
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

      const mIdx = state.monthNotes.findIndex(({ date }) => isDateToday(date));
      if (mIdx !== -1) {
        state.monthNotes[mIdx].totalVolume = state.todayStats.totalVolume;
        state.monthNotes[mIdx].fulfillment = state.todayStats.fulfillment;
        state.monthNotes[mIdx].servingsCount = state.todayStats.servingsCount;
      }

      state.isWaterUpdating = false;
      state.error = null;
    });
    builder.addCase(updateWater.rejected, (state, { payload }) => {
      state.isWaterUpdating = false;
      state.error = payload;
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

      const mIdx = state.monthNotes.findIndex(({ date }) => {
        const is = isDateToday(date);
        console.log(date, is);
        return is;
      });
      console.log(mIdx);
      if (mIdx !== -1) {
        state.monthNotes[mIdx].totalVolume = state.todayStats.totalVolume;
        state.monthNotes[mIdx].fulfillment = state.todayStats.fulfillment;
        state.monthNotes[mIdx].servingsCount = state.todayStats.servingsCount;
      }
      state.isWaterUpdating = false;
      state.error = null;
    });
    builder.addCase(deleteWater.rejected, (state, { payload }) => {
      state.isWaterUpdating = false;
      state.error = payload;
    });
  },
});
