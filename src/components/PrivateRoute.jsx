import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shoudRedirect = !isLoggedIn && !isRefreshing;

  return shoudRedirect ? <Navigate to={redirectTo} /> : Component;
};
