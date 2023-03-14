/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./notePopup.css";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store/toggle-slice";
import { noteActions } from "../../store/note-slice";
import ReactLoading from "react-loading";
import axios from "axios";

function notePopup(props) {
  const dispatch = useDispatch();
  const popUp = useSelector((state) => state.toggle.isPopUp);
  const nBack = useSelector((state) => state.note.noteBackground);
  const nTitle = useSelector((state) => state.note.noteTitle);
  const nDesc = useSelector((state) => state.note.noteDescription);
  const nId = useSelector((state) => state.note.noteId);
  const isPopUpLoading = useSelector((state) => state.toggle.isPopUpLoading);

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

    dispatch(
      toggleActions.setIsPopUpLoading({
        isPopUpLoading: true,
      })
    );
  };

  const handleUpdateNote = async (id) => {
    try {
      // console.log(id);
      // const { data } = await axios.patch(`http://localhost:3001/notes/${id}`, {
      const { data } = await axios.patch(
        `https://note-hive.onrender.com/notes/${id}`,
        {
          title: nTitle,
          description: nDesc,
          backGround: nBack,
        }
      );
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
      console.log(err);
    }
  };

  return props.trigger ? (
    <Box
      className="popup"
      onClick={() => {
        handleUpdateNote(nId);
        handleClosePopUp();
      }}
    >
      {isPopUpLoading ? (
        <Box className="popup-loading-container">
          <ReactLoading type={"spin"} color="#1976d2" />
          <p>Wait a sec ...</p>
        </Box>
      ) : (
        <Box
          className="popup-inner"
          sx={{
            backgroundColor: `${nBack}`,
            width: { xs: "80%", sm: "40%" },
          }}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {isPopUpLoading ? <>Loading</> : ""}
          {props.children}
        </Box>
      )}
    </Box>
  ) : (
    ""
  );
}

export default notePopup;
