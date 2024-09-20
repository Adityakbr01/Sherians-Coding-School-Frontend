import { createSlice } from "@reduxjs/toolkit";

let initialState = true;

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state) => {
      return !state;
    },
  },
});

export const { toggle } = toggleSlice.actions;

export default toggleSlice.reducer;
