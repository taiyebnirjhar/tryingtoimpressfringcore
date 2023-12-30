import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar.slice";

export const store = configureStore({
  reducer: {
    sidebarSlice: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
