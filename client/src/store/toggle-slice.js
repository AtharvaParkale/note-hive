import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isOpen: true,
    isPopUp:false
  },
  reducers: {
    openBox(state, action) {
      state.isOpen = action.payload.isOpen;
    },

    isPopUp(state, action) {
      state.isPopUp = action.payload.isPopUp;
    },
  },
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice;
