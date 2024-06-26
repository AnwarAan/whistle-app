import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
