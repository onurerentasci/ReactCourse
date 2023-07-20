import React from "react";
import { Stack, Divider } from "@mui/material";

export const LessonStack = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={{ sx: 1, sm: 2, md: 4 }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
      <div>item4</div>
    </Stack>
  );
};
