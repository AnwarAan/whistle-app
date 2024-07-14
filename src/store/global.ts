import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialState = {
  isOpen: false,
  random: Math.random(),
};

export const globlaSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setOpen(state, action: PayloadAction<any>) {
      state.isOpen = action.payload;
    },
    setRandom(state) {
      state.random = Math.random();
    },
  },
});

export const { setOpen, setRandom } = globlaSlice.actions;
export const open = (state: RootState) => state.global.isOpen;
export const random = (state: RootState) => state.global.random;
export default globlaSlice.reducer;
