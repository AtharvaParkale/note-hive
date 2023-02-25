import React, { useState } from "react";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Notes.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store/toggle-slice";
import axios from "axios";
import { noteActions } from "../../store/note-slice";
import Popup from "./notePopup";
import DeletePopUp from "./DeletePopUp/DeletePopUp";
import BackgroundPopUp from "./BackgroundPopUp/BackgroundPopUp";

function Notes() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.toggle.isOpen);
  const popUp = useSelector((state) => state.toggle.isPopUp);

  // console.log(popUp);

  const nTitle = useSelector((state) => state.note.noteTitle);
  const nDesc = useSelector((state) => state.note.noteDescription);
  const nBack = useSelector((state) => state.note.noteBackground);
  const nId = useSelector((state) => state.note.noteId);
  const nWhite="white"

  // console.log(nId);

  // console.log(nTitle);
  // console.log(nDesc);
  // console.log(nBack);

  const data = useSelector((state) => state.note.notesList);

  // console.log(data);

  const setToggle = () => {
    dispatch(
      toggleActions.openBox({
        isOpen: !open,
      })
    );
  };

  const setPopUp = () => {
    dispatch(
      toggleActions.isPopUp({
        isPopUp: !popUp,
      })
    );
  };

  const handleClosePopUp = () => {
    dispatch(
      noteActions.addNote({
        noteTitle: "",
        noteDescription: "",
        noteBackground: "white",
      })
    );
    dispatch(
      toggleActions.isPopUp({
        isPopUp: !popUp,
      })
    );
  };

 

  const setNoteData = async (title, description, background) => {
    dispatch(
      noteActions.addNote({
        noteTitle: title,
        noteDescription: description,
        noteBackground: background,
      })
    );
  };

  const handleAddNote = async () => {
    // console.log(nTitle);
    // console.log(nDesc);
    // console.log(nBack);
    try {
      const note = {
        title: nTitle,
        description: nDesc,
        backGround: nBack,
      };

      const { data } = await axios.put("http://localhost:3001/notes/", note);

      dispatch(
        noteActions.addNote({
          noteTitle: "",
          noteDescription: "",
          noteBackground: "white",
        })
      );

      dispatch(
        noteActions.replaceData({
          notesList: data,
        })
      );
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleGetSingleNote = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/notes/${id}`);
      // console.log(data);
      // setNotes(data);

      dispatch(
        noteActions.addNote({
          noteTitle: data.title,
          noteDescription: data.description,
          noteBackground: data.backGround,
        })
      );

      dispatch(
        noteActions.addId({
          noteId: id,
        })
      );
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleUpdateNote = async (id) => {
    try {
      // console.log(id);
      const { data } = await axios.patch(`http://localhost:3001/notes/${id}`, {
        title: nTitle,
        description: nDesc,
        backGround: nBack,
      });
      // console.log(data);

      dispatch(
        noteActions.replaceData({
          notesList: data,
        })
      );

      dispatch(
        noteActions.addNote({
          noteTitle: "",
          noteDescription: "",
          noteBackground: "white",
        })
      );
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "100vh",
        // border: "2px solid black",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: "70%",
          // border: "2px solid black",
          minHeight: "75vh",
          marginTop: "15vh",
        }}
      >
        <Box
          className="input-container"
          sx={{
            width: "100%",
            // border: "2px solid blue",
            minHeight: "8vh !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box className="input-inner-container" sx={{
            backgroundColor:`${!open?nBack:nWhite}`
            // border:`${nBack}`
          }}>
            {open ? (
              <Box className="take-note-container" onClick={setToggle}>
                <p>Take a note...</p>
              </Box>
            ) : (
              <>
                <Box className="title-container">
                  <TextField
                    placeholder="Title"
                    className="title-input"
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                    onChange={(e) => {
                      setNoteData(e.target.value, nDesc, nBack);
                    }}
                  />
                </Box>
                <Box className="description-container">
                  <TextField
                    className="desc-textarea"
                    multiline
                    placeholder="Take a note..."
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                    onChange={(e) => {
                      setNoteData(nTitle, e.target.value, nBack);
                    }}
                  />
                </Box>
                <Box className="features-container">

                  <BackgroundPopUp/>

                  <Button
                    variant="contained"
                    size="small"
                    className="note-btn"
                    onClick={() => {
                      handleAddNote();
                      setToggle();
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            // border: "2px solid black",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {data.map((note) => (
            // <div key={note._id}>{note.description}</div>
            <Box
              key={note._id}
              className="card-container"
              onClick={() => {
                handleGetSingleNote(note._id);
                
              }}
              sx={{
                backgroundColor:`${note.backGround}`
              }}
            >
              <Box
                className="text-holder"
                sx={{
                  // border: "2px solid black",
                  width: "100%",
                }}
                onClick={()=>{
                  setPopUp();
                }}
              >
                <span>{note.title}</span>
                <br />

                <div className="description-container">
                  <p>{note.description}</p>
                </div>
              </Box>
              <Box
                className="delete-card-container"
                sx={{
                  // border: "2px solid black",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <DeletePopUp noteId={note._id}/>
              </Box>
            </Box>
          ))}
        </Box>
      </Stack>
      <Popup trigger={popUp}>
        <Box className="popup-title-container">
          <input
            type="text"
            value={nTitle}
            onChange={(e) => {
              setNoteData(e.target.value, nDesc, nBack);
            }}
          />
        </Box>
        <Box className="popup-desc-container">
          <input
            type="text"
            value={nDesc}
            onChange={(e) => {
              setNoteData(nTitle, e.target.value, nBack);
            }}
          />
        </Box>
        <Box className="close-button-container">
          <Button
            variant="contained"
            size="small"
            className="note-btn"
            onClick={() => {
              handleUpdateNote(nId);
              handleClosePopUp();
            }}
          >
            CLOSE
          </Button>
        </Box>
      </Popup>
    </Stack>
  );
}

export default Notes;
