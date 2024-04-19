import { selectTodayStats } from 'redux-store/water/waterSelectors';
import * as operations from '../redux-store/water/waterOperations';
import { useDispatch, useSelector } from 'react-redux';

export const useWater = () => {
  const dispatch = useDispatch();
  const todayStats = useSelector(selectTodayStats);

  const fetchTodayStats = () => dispatch(operations.fetchTodayStats()).unwrap();
  const fetchMonthStats = currentMonth =>
    dispatch(operations.fetchMonthStats(currentMonth)).unwrap();
  return { todayStats, fetchTodayStats, fetchMonthStats };
};
