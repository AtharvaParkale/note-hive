import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Notes from "./components/Notes/Notes";
import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "./store/note-slice";
import { toggleActions } from "./store/toggle-slice";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.toggle.isLoading);
  
  const fetchNotes = async () => {
    try {
      // const { data } = await axios.get("http://localhost:3001/notes/");
      const { data } = await axios.get("https://note-hive.onrender.com/notes/");
      return data;
    } catch (err) {
      console.log("Error while fetching the data");
    }
  };

  useEffect(() => {
    fetchNotes().then((data) => {
      // console.log("Data fetched successfully !");
      dispatch(
        noteActions.replaceData({
          notesList: data,
        })
      );

      dispatch(
        toggleActions.setIsLoading({
          isLoading: false,
        })
      );
    });
  }, []);

  // console.log(isLoading);

  return (
    <div className="App">
      <Notes />
    </div>
  );
}

export default App;
