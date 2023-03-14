import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isOpen: true,
    isPopUp:false,
    isLoading:true,
    isPopUpLoading:true
  },
  reducers: {
    openBox(state, action) {
      state.isOpen = action.payload.isOpen;
    },

    isPopUp(state, action) {
      state.isPopUp = action.payload.isPopUp;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
    setIsPopUpLoading(state, action) {
      state.isPopUpLoading = action.payload.isPopUpLoading;
    },
  },
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice;
