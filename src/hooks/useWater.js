import { selectTodayStats } from 'redux-store/water/waterSelectors';
import * as operations from '../redux-store/water/waterOperations';
import { useDispatch, useSelector } from 'react-redux';

export const useWater = () => {
  const dispatch = useDispatch();
  const todayStats = useSelector(selectTodayStats);

  const getTodayStats = () => dispatch(operations.getTodayStats());
  return { todayStats, getTodayStats };
};
