import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function LessonTooltip() {
  return (
    <Tooltip title="Sil" placement="right">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}

export default LessonTooltip;
