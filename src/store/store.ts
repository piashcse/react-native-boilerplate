import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from '@/src/service/query/rtkQuery';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiErrorMiddleware } from '@/src/store/apiErrorMiddleware';

const configureAppStore = () => {
  const store = configureStore({
    reducer: {
      [movieApi.reducerPath]: movieApi.reducer, // Add the reducer here
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([movieApi.middleware, apiErrorMiddleware]), // Add the middleware to manage API calls
    devTools: process.env.NODE_ENV === 'development',
  });
  setupListeners(store.dispatch);
  return store;
};

export default configureAppStore;
