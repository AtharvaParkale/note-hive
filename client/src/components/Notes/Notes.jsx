import React from "react";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import DeleteIcon from '@mui/icons-material/Delete';
import "./Notes.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store/toggle-slice";

function Notes() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.toggle.isOpen);
  const data = useSelector((state) => state.note.notesList);
  console.log(data);

  const setToggle = () => {
    dispatch(
      toggleActions.openBox({
        isOpen: !open,
      })
    );
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
          <Box className="input-inner-container">
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
                  />
                </Box>
                <Box className="features-container">
                  <IconButton aria-label="Example">
                    <ColorLensIcon />
                  </IconButton>

                  <Button
                    variant="contained"
                    size="small"
                    className="note-btn"
                    onClick={setToggle}
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
            <Box key={note._id} className="card-container">
              <Box
                className="text-holder"
                sx={{
                  border: "2px solid black",
                  width:'100%'
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
                  border: "2px solid black",
                  width:'100%',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'flex-end'
                }}
              >
                <IconButton>
                  <DeleteIcon fontSize="small"/>
                </IconButton>
              </Box>
            </Box>
          ))}
          {/* <Box className="card-container">Hi</Box>

          <Box className="card-container">Hi</Box>

          <Box className="card-container">Hi</Box>

          <Box className="card-container">Hi</Box>
          <Box className="card-container">Hi</Box> */}
        </Box>
      </Stack>
    </Stack>
  );
}

export default Notes;
