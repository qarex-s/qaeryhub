import { configureStore } from "@reduxjs/toolkit";
import pageSpeedSlice from "./slices/pageSpeedSlice";
import authSlice from "./slices/authSlice";
import userProfileSlice from "./slices/userProfileSlice";
export const store = configureStore({
  reducer: {
    pageSpeed: pageSpeedSlice,
    auth: authSlice,
    user: userProfileSlice,
  },
});
