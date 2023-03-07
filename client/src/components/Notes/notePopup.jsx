import React from "react";
import "./notePopup.css";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store/toggle-slice";
import { noteActions } from "../../store/note-slice";

function notePopup(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const popUp = useSelector((state) => state.toggle.isPopUp);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const nBack = useSelector((state) => state.note.noteBackground);

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

  return props.trigger ? (
    <Box className="popup" onClick={handleClosePopUp}>
      <Box
        className="popup-inner"
        sx={{
          backgroundColor: `${nBack}`,
          width: { xs: "80%", sm: "40%" },
        }}
        onClick={(event)=>{
          event.stopPropagation();
        }}
      >
        {props.children}
      </Box>
    </Box>
  ) : (
    ""
  );
}

export default notePopup;
