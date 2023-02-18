import React, { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import Notes from "./components/Notes/Notes";

function App() {
  //  const [notes, setNotes] = useState([]);

  // const fetchNotes = async () => {
  //   const {data} = await axios.get("http://localhost:3001/notes/");
  //   setNotes(data)
  //   // console.log(data);
  // };

  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  // console.log(notes)

  return (
    <div className="App">
      <Notes />
    </div>
  );
}

export default App;
