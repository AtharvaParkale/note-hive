import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notesList: [],
  },
  reducers: {
    replaceData(state, action) {
      state.notesList = action.payload.notesList;
    },

    updateNote(state, action) {},

    addNote(state, action) {},

    deleteNote(state, action) {},
  },
});

// REDUX THUNK IMPLEMENTATION

export const noteActions = noteSlice.actions;

export default noteSlice;
