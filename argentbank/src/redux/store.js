import { configureStore } from '@reduxjs/toolkit';
import authRTest from './reducers/authRTest';

export const store = configureStore({
  reducer: {
    auth: authRTest,
  },
});
