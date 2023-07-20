import React from "react";
import { Avatar, AvatarGroup, Stack } from "@mui/material";

function LessonAvatar() {
  return (
    <Stack direction="row" spacing={14}>
      <AvatarGroup max={3}>
        <Avatar src="https://randomuser.me/api/portraits/women/91.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/31.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/41.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/men/2.jpg" />
      </AvatarGroup>
      <AvatarGroup>
        <Avatar
          sx={{
            marginRight: 3,
            bgcolor: "secondary.light",
            width: 50,
            height: 50,
          }}
        >
          Onur
        </Avatar>
        <Avatar variant="square">Eren</Avatar>
      </AvatarGroup>
    </Stack>
  );
}

export default LessonAvatar;
