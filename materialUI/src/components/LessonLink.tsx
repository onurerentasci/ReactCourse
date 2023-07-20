import React from "react";
import { Link, Box } from "@mui/material";

function LessonLink() {
  return (
    <Box>
      <Link href="https://google.com" sx={{ margin: "20px" }}>
        googlea git
      </Link>
      <Link
        href="https://google.com"
        color="error"
        variant="body2"
        sx={{ margin: "20px" }}
      >
        googlea git
      </Link>
      <Link href="https://google.com" underline="none" sx={{ margin: "20px" }}>
        googlea git
      </Link>
      <Link href="https://google.com" underline="hover" sx={{ margin: "20px" }}>
        googlea git
      </Link>
      <Link
        href="https://google.com"
        component="button"
        // normalde a olarak gözükecektir
        // elements kısmında button olarak gözükür
        onClick={() => {
          console.log("onur");
        }}
        sx={{ margin: "20px" }}
      >
        googlea git
      </Link>
    </Box>
  );
}

export default LessonLink;
