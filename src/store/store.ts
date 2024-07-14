import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./global";
import counterSlice from "./counter";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    counter: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
