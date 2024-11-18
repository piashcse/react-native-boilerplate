import { configureStore } from '@reduxjs/toolkit';
import combineReducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, combineReducers);

const configureAppStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        middleware,
        logger
      ),
    devTools: process.env.NODE_ENV === 'development',
  });
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureAppStore;
