import React, { useState } from "react";
import { Snackbar, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function LessonSnackbar() {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Geri Al
      </Button>
      <IconButton>
        <CloseIcon sx={{ color: "white" }} onClick={handleClose} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Snackbarı Aç
      </Button>
      <Snackbar
        open={openSnackbar}
        message="Hata mesajı aldınız"
        action={action}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{vertical: "top", horizontal: "right"}}
      />
    </div>
  );
}

export default LessonSnackbar;
