import { configureStore } from "@reduxjs/toolkit";
import pageSpeedSlice from "./slices/pageSpeedSlice";
export const store = configureStore({
  reducer: {
    pageSpeed: pageSpeedSlice,
  },
});
