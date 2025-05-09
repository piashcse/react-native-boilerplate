import { configureStore } from '@reduxjs/toolkit';
import { MovieApi } from '@/src/service/query/RKTQuery';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiErrorMiddleware } from '@/src/store/ApiErrorMiddleware';

const configureAppStore = () => {
  const store = configureStore({
    reducer: {
      [MovieApi.reducerPath]: MovieApi.reducer, // Add the reducer here
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([MovieApi.middleware, apiErrorMiddleware]), // Add the middleware to manage API calls
    devTools: process.env.NODE_ENV === 'development',
  });
  setupListeners(store.dispatch);
  return store;
};

export default configureAppStore;
