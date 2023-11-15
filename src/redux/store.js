import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from 'redux-logger';
import combinedReducer from './reducers';

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
