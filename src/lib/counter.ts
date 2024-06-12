import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    changeNumber(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, changeNumber } = counterSlice.actions;
export const count = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
