import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as operations from 'redux-store/auth/authOperations';
import {
  selectIsAuthLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectError,
} from 'redux-store/auth/authSelectors';

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthLoading = useSelector(selectIsAuthLoading);
  const error = useSelector(selectError);

  const register = formData => dispatch(operations.register(formData)).unwrap();
  const logIn = formData => dispatch(operations.logIn(formData)).unwrap();
  const logOut = () => dispatch(operations.logOut());
  const updateAvatar = file => dispatch(operations.updateAvatar(file)).unwrap();
  const updateMyDailyNorma = daylyNorma =>
    dispatch(operations.updateMyDailyNorma(daylyNorma)).unwrap();
  const updateProfile = newProfile =>
    dispatch(operations.updateProfile(newProfile)).unwrap();

  const refreshUser = useCallback(
    () => dispatch(operations.refreshUser()).unwrap(),
    [dispatch]
  );
  return {
    user,
    error,
    isLoggedIn,
    isRefreshing,
    isAuthLoading,
    register,
    logIn,
    logOut,
    refreshUser,
    updateAvatar,
    updateProfile,
    updateMyDailyNorma,
  };
};
