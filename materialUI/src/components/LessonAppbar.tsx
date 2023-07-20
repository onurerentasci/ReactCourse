import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";

function LessonAppbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openControl = Boolean(anchorEl);
  console.log(openControl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ marginRight: "auto" }}>
          Header Örneği
        </Typography>
        <Stack direction="row">
          <Button sx={{ color: "white", fontSize: "12px" }}>Anasayfa</Button>
          <Button sx={{ color: "white", fontSize: "12px" }}>Hakkımızda</Button>
          <Button sx={{ color: "white", fontSize: "12px" }}>Ürünler</Button>
          <Button sx={{ color: "white", fontSize: "12px" }}>Fiyatlar</Button>
          <Button
            sx={{ color: "white", fontSize: "12px" }}
            onClick={handleClick}
          >
            İndirimdekier
          </Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Kitaplar</MenuItem>
          <MenuItem onClick={handleClose}>Defterler</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default LessonAppbar;
