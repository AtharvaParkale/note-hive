import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notesList: [],
    noteTitle: "",
    noteDescription: "",
    noteBackground: "white",
    noteId:""
  },
  reducers: {
    replaceData(state, action) {
      state.notesList = action.payload.notesList;
    },

    updateNote(state, action) {},

    addNote(state, action) {
      state.noteTitle = action.payload.noteTitle;
      state.noteDescription = action.payload.noteDescription;
      state.noteBackground = action.payload.noteBackground;
      // state.noteBackground = action.payload.noteBackground;
    },
    addId(state,action){
      state.noteId = action.payload.noteId;
    },

    deleteNote(state, action) {},
  },
});

// REDUX THUNK IMPLEMENTATION

export const noteActions = noteSlice.actions;

export default noteSlice;
