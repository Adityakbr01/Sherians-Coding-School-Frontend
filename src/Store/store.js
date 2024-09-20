import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../Features/ToggleBtn";

export const store = configureStore({
  reducer: {
    toggle: toggleSlice,
  },
});
