import React, { useState } from "react";
import { Drawer, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Draw } from "@mui/icons-material";

function LessonDrawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={isOpen}
        anchor="right"
        onClose={handleClose}
        sx={{ width: 300 }}
      >
        <Box width="250px" textAlign="center">
          <Typography component="div" variant="h6">
            Sol panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default LessonDrawer;
