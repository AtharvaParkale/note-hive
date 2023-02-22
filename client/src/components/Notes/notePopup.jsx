import React from "react";
import "./notePopup.css";
import { Box } from "@mui/material";

function notePopup(props) {
  return props.trigger ? (
    <Box className="popup">
      <Box className="popup-inner">{props.children}</Box>
    </Box>
  ) : (
    ""
  );
}

export default notePopup;
