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

const getTodayStart = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const isDateToday = date => {
  const today = getTodayStart();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const noteDate = new Date(date);

  return noteDate.getTime() >= today.getTime() &&
    noteDate.getTime() < tomorrow.getTime()
    ? true
    : false;
};

const getCurrentMonthStart = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  return date;
};

const isCurrentMonth = month => {
  const monthStart = getCurrentMonthStart();
  const monthEnd = new Date(monthStart);
  monthEnd.setDate(monthEnd.getDate() + 1);
  const currentMonth = new Date(month);

  return (
    currentMonth.getTime() >= monthStart.getTime() &&
    currentMonth.getTime() < monthEnd.getTime()
  );
};

const initialState = {
  todayStats: {
    dailyNorma: null,
    dayNotes: [],
    totalVolume: null,
    fulfillment: null,
    servingsCount: null,
  },
  monthStats: { month: getCurrentMonthStart().toISOString(), monthNotes: [] },
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
      const idx = state.monthStats.monthNotes.findIndex(({ date }) =>
        isDateToday(date)
      );
      if (idx !== -1) {
        state.monthStats.monthNotes[idx].dailyNorma = payload;
        state.monthStats.monthNotes[idx].fulfillment = calcFulfillment(
          state.monthStats.monthNotes[idx].totalVolume,
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
      state.monthStats = payload;
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

      const idx = state.monthStats.monthNotes.findIndex(({ date }) =>
        isDateToday(date)
      );

      if (idx === -1 && isCurrentMonth(state.monthStats.month)) {
        state.monthStats.monthNotes.push({
          date: getTodayStart().toISOString(),
          dailyNorma: state.todayStats.dailyNorma,
          totalVolume,
          fulfillment,
          servingsCount,
        });
      }

      if (idx !== -1) {
        state.monthStats.monthNotes[idx].totalVolume = totalVolume;
        state.monthStats.monthNotes[idx].fulfillment = fulfillment;
        state.monthStats.monthNotes[idx].servingsCount = servingsCount;
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

      const mIdx = state.monthStats.monthNotes.findIndex(({ date }) =>
        isDateToday(date)
      );
      if (mIdx !== -1) {
        state.monthStats.monthNotes[mIdx].totalVolume =
          state.todayStats.totalVolume;
        state.monthStats.monthNotes[mIdx].fulfillment =
          state.todayStats.fulfillment;
        state.monthStats.monthNotes[mIdx].servingsCount =
          state.todayStats.servingsCount;
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

      const mIdx = state.monthStats.monthNotes.findIndex(({ date }) =>
        isDateToday(date)
      );

      if (mIdx !== -1) {
        state.monthStats.monthNotes[mIdx].totalVolume =
          state.todayStats.totalVolume;
        state.monthStats.monthNotes[mIdx].fulfillment =
          state.todayStats.fulfillment;
        state.monthStats.monthNotes[mIdx].servingsCount =
          state.todayStats.servingsCount;
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
