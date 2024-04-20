import { selectTodayStats } from 'redux-store/water/waterSelectors';
import * as operations from '../redux-store/water/waterOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { waterSlice } from 'redux-store/water/waterSlice';

export const useWater = () => {
  const dispatch = useDispatch();
  const todayStats = useSelector(selectTodayStats);

  const setDailyNormaInStore = dailyNorma =>
    dispatch(waterSlice.actions.setDailyNorma(dailyNorma));

  const fetchTodayStats = useCallback(
    () => dispatch(operations.fetchTodayStats()),
    [dispatch]
  );

  const fetchMonthStats = currentMonth =>
    dispatch(operations.fetchMonthStats(currentMonth)).unwrap();

  return { todayStats, fetchTodayStats, fetchMonthStats, setDailyNormaInStore };
};
