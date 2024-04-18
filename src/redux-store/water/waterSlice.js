import { createSlice } from '@reduxjs/toolkit';
import { fetchTodayStats } from './waterOperations';

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
  isWaterLoading: false,
  error: null,
};

export const waterSlice = createSlice({
  name: 'water',
  initialState,

  extraReducers: builder => {
    builder.addCase(fetchTodayStats.fulfilled, (state, { payload }) => {});
  },
});
