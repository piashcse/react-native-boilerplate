import { configureStore } from '@reduxjs/toolkit';
import { MovieApi } from '@/src/redux/query/RKTQuery';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rtkQueryErrorMiddleware } from '@/src/redux/store/RtkQueryErrorMiddleware';

const configureAppStore = () => {
  const store = configureStore({
    reducer: {
      [MovieApi.reducerPath]: MovieApi.reducer, // Add the reducer here
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        MovieApi.middleware,
        rtkQueryErrorMiddleware,
      ]), // Add the middleware to manage API calls
    devTools: process.env.NODE_ENV === 'development',
  });
  setupListeners(store.dispatch);
  return store;
};

export default configureAppStore;
