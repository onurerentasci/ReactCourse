import React from "react";
import { Paper, Box } from "@mui/material";

function LessonPaper() {
  return (
    <Box sx={{ display: "flex", gap: "20px" }}>
      <Paper sx={{ width: 200, height: 200 }} />;
      <Paper sx={{ width: 200, height: 200 }} elevation={0} />
      <Paper sx={{ width: 200, height: 200 }} elevation={1} />
      <Paper sx={{ width: 200, height: 200 }} elevation={10} />
      <Paper sx={{ width: 200, height: 100 }} variant="outlined" square/>
      {/* elevation = Gölge */}
    </Box>
  );
}

export default LessonPaper;
