import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { waterSlice } from './water/waterSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedAuthSliceReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    [authSlice.name]: persistedAuthSliceReducer,
    [waterSlice.name]: waterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
