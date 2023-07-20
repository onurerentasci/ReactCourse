import React from "react";
import { CircularProgress, LinearProgress, Stack } from "@mui/material";

function LessonSpinner() {
  return (
    <Stack spacing={5}>
      <Stack spacing={3} direction="row">
        <CircularProgress color="warning" />
        <CircularProgress color="secondary" />
        <CircularProgress color="error" />
        <CircularProgress variant="determinate" value={30} color="error" />
      </Stack>

      <Stack spacing={3}>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress color="error" variant="determinate" value={30} />
      </Stack>
    </Stack>
  );
}

export default LessonSpinner;
