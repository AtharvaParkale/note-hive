import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Notes from "./components/Notes/Notes";
import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "./store/note-slice";

function App() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.toggle.isOpen);
  console.log(open);

  // const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/notes/");

      // setNotes(data);

      dispatch(
        noteActions.replaceData({
          notesList: data,
        })
      );
    } catch (err) {
      console.log("Error while fetching the data");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // console.log(notes);

  return (
    <div className="App">
      <Notes />
    </div>
  );
}

export default App;
