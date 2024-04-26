// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import postReducer from "./slice/postSlice"
import loadingReducer from "./slice/loaderSlice"
export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
    post :postReducer
  },
});
