import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, IconButton } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { noteActions } from "../../../store/note-slice";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import "./BackgroundPopUp.css";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

function BackgroundPopUp() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleBgcolor = (clr) => {
    // console.log(clr);

    dispatch(
      noteActions.setBackgroundColor({
        noteBackground: clr,
      })
    );
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <ColorLensIcon />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClick={() => {
          handleClose();
        }}
      >
        <Box className="bgcolor-container">
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#f28b82",
            }}
            title="#f28b82"
            onClick={(e) => {
              handleBgcolor(e.target.title);
            }}
          ></Box>
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#fbbc04",
            }}
            title="#fbbc04"
            value="#fbbc04"
            onClick={(e) => {
              //   console.log(e.target);
              handleBgcolor(e.target.title);
            }}
          ></Box>
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#fff475",
            }}
            title="#fff475"
            value="#fff475"
            onClick={(e) => {
              //   console.log(e.target);
              handleBgcolor(e.target.title);
            }}
          ></Box>
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#ccff90",
            }}
            title="#ccff90"
            value="#ccff90"
            onClick={(e) => {
              //   console.log(e.target);
              handleBgcolor(e.target.title);
            }}
          ></Box>
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#a7ffeb",
            }}
            title="#a7ffeb"
            value="#a7ffeb"
            onClick={(e) => {
              //   console.log(e.target);
              handleBgcolor(e.target.title);
            }}
          ></Box>
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#cbf0f8",
            }}
            title="#cbf0f8"
            value="#cbf0f8"
            onClick={(e) => {
              //   console.log(e.target);
              handleBgcolor(e.target.title);
            }}
          ></Box>
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#aecbfa",
            }}
            title="#aecbfa"
            value="#aecbfa"
            onClick={(e) => {
              //   console.log(e.target);
              handleBgcolor(e.target.title);
            }}
          ></Box>
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#d7aefb",
            }}
            title="#d7aefb"
            value="#d7aefb"
            onClick={(e) => {
              //   console.log(e.target);
              handleBgcolor(e.target.title);
            }}
          ></Box>
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#fdcfe8",
            }}
            title="#fdcfe8"
            value="#fdcfe8"
            onClick={(e) => {
              //   console.log(e.target);
              handleBgcolor(e.target.title);
            }}
          ></Box>
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#e6c9a8",
            }}
            title="#e6c9a8"
            value="#e6c9a8"
            onClick={(e) => {
              //   console.log(e.target);
              handleBgcolor(e.target.title);
            }}
          ></Box>
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#e8eaed",
            }}
            title="#e8eaed"
            value="#e8eaed"
            onClick={(e) => {
              //   console.log(e.target);
              handleBgcolor(e.target.title);
            }}
          ></Box>
          <Box
            className="bgcolor-circle"
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #b8b6b6",
              width: "26px",
              height: "26px",
            }}
            title="#fff"
            value="#fff"
            onClick={(e) => {
              handleBgcolor(e.target.title);
            }}
          >
            {/* <DoNotDisturbIcon /> */}
          </Box>
        </Box>
      </Popover>
    </Box>
  );
}

export default BackgroundPopUp;
