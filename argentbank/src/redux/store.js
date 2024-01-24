import { configureStore } from '@reduxjs/toolkit';
import authReducers from './reducers/authReducers';

export const store = configureStore({
  reducer: {
    auth: authReducers,
  },
});
