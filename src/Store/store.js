import { configureStore } from '@reduxjs/toolkit';
import { adminSlice } from '../Redux-Slice/adminSlice.js';
import { userInfoSlice } from '../Redux-Slice/userInfoSlice.js';

export const store = configureStore({
  reducer: {
    admin: adminSlice.reducer,
    userinfo: userInfoSlice.reducer,
  },
});
