import React from "react";
import "./notePopup.css";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

function notePopup(props) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const nBack = useSelector((state) => state.note.noteBackground);

  return props.trigger ? (
    <Box className="popup">
      <Box className="popup-inner" sx={{
        backgroundColor:`${nBack}`
      }}>{props.children}</Box>
    </Box>
  ) : (
    ""
  );
}

export default notePopup;
