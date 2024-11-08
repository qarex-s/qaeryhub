import { configureStore } from "@reduxjs/toolkit";
import pageSpeedSlice from "./slices/pageSpeedSlice";
import authSlice from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    pageSpeed: pageSpeedSlice,
    auth: authSlice,
  },
});
