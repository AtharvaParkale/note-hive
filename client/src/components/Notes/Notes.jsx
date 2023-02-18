import React from "react";
import { Box, Stack } from "@mui/material";
import "./Notes.css";

function Notes() {
  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "100vh",
        border: "2px solid black",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          width: "70%",
          border: "2px solid black",
          minHeight: "75vh",
          marginTop: "15vh",
        }}
      >
        <Box
          className="input-container"
          sx={{
            width: "100%",
            border: "2px solid blue",
            minHeight: "10vh",
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <Box className="input-inner-container">
            <Box className="take-note-container">
                <p>Take a note...</p>
            </Box>
            <Box className="title-container">

            </Box>
            <Box className="description-container">

            </Box>
            <Box className="features-container">

            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box className="card-container">Hi</Box>

          <Box className="card-container">Hi</Box>

          <Box className="card-container">Hi</Box>

          <Box className="card-container">Hi</Box>
          <Box className="card-container">Hi</Box>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Notes;
