// import { useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import * as operations from 'redux-store/auth/authOperations';
// import {
//   selectIsAuthLoading,
//   selectIsLoggedIn,
//   selectIsRefreshing,
//   selectUser,
// } from 'redux-store/auth/authSelectors';

export const useAuth = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;
  // const isRefreshing = useSelector(selectIsRefreshing);
  const isRefreshing = false;
  // const isAuthLoading = useSelector(selectIsAuthLoading);

  // const register = formData => dispatch(operations.register(formData)).unwrap();
  // const logIn = formData => dispatch(operations.logIn(formData)).unwrap();
  // const logOut = () => dispatch(operations.logOut());
  // const updateProfile = file => dispatch(operations.updateProfile(file));
  // const updateName = name => dispatch(operations.updateName(name));
  // const refreshUser = useCallback(
  //   () => dispatch(operations.refreshUser()).unwrap(),
  //   [dispatch]
  // );
  return {
    // user,
    isLoggedIn,
    isRefreshing,
    // isAuthLoading,
    // register,
    // logIn,
    // logOut,
    // refreshUser,
    // updateProfile,
    // updateName,
  };
};