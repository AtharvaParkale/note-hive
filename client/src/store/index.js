import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle-slice";
import noteSlice from "./note-slice";

const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
    note: noteSlice.reducer,
  },
});

export default store;
