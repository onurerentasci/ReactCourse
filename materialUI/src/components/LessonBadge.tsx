import React from "react";
import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

function LessonBadge() {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={50} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={50} max={40} color="secondary">
        <MailIcon />
      </Badge>
      <Badge
        badgeContent={50}
        color="success"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <MailIcon />
      </Badge>
    </Stack>
  );
}

export default LessonBadge;
