import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isOpen: true,
  },
  reducers: {
    openBox(state, action) {
      state.isOpen = action.payload.isOpen;
    },
  },
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice;
