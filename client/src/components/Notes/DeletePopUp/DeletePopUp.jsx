import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { useDispatch } from "react-redux";
import { noteActions } from "../../../store/note-slice";
import './DeletePopUp.css'

export default function DeletePopUp({noteId}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleDeleteNote = async (id) => {
    try {
      // const { data } = await axios.delete(`http://localhost:3001/notes/${id}`);
      const { data } = await axios.delete(`https://note-hive.onrender.com/notes/${id}`);
      dispatch(
        noteActions.replaceData({
          notesList: data,
        })
      );
      console.log("Note deleted successfully !");
    } catch (err) {
      console.log("Error in deleting the note!");
    }
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
      <IconButton  aria-describedby={id}  onClick={handleClick}
      >
        <MoreVertIcon fontSize="small" />
      </IconButton>
     
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClick={()=>{
            
            handleClose()
            // console.log(noteId)
        }}
      >
        <Typography sx={{ p: 2 }} onClick={()=>{
          handleDeleteNote(noteId);
        }}>Delete</Typography>
      </Popover>
    </Box>
  );
}
