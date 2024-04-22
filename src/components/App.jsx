import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestricredRoute';
import { PrivateRoute } from './PrivateRoute';
import { routes } from 'constants/routes';
import { SharedLayout } from './SharedLayout/SharedLayout';
import MainLoader from './Loaders/MainLoaderVA/MainLoader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignupPage = lazy(() => import('pages/SignupPage/SignupPage'));
const SigninPage = lazy(() => import('pages/SigninPage/SigninPage'));

export const App = () => {
  const { refreshUser, isRefreshing } = useAuth();

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  return isRefreshing ? (
    <MainLoader />
  ) : (
    <Routes>
      <Route path={routes.MAIN} element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute
              redirectTo={routes.HOME}
              component={<WelcomePage />}
            />
          }
        />

        <Route
          path={routes.WELCOME}
          element={
            <RestrictedRoute
              redirectTo={routes.HOME}
              component={<WelcomePage />}
            />
          }
        />

        <Route
          path={routes.HOME}
          element={
            <PrivateRoute
              redirectTo={routes.WELCOME}
              component={<HomePage />}
            />
          }
        />

        <Route
          path={routes.SIGNUP}
          element={
            <RestrictedRoute
              redirectTo={routes.HomePage}
              component={<SignupPage />}
            />
          }
        />

        <Route
          path={routes.SIGNIN}
          element={
            <RestrictedRoute
              redirectTo={routes.HomePage}
              component={<SigninPage />}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to={routes.MAIN} />} />
    </Routes>
  );
};
