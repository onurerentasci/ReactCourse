import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";

function LessonDialog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Dialogu Aç
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <DialogTitle>Hangisini Tercih Edersin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hangi javascript frontend frameworkunu tercih edersin?
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setIsOpen(false)} color="error" variant="outlined">
              Angular
            </Button>
            <Button onClick={() => setIsOpen(false)} variant="outlined">
              React js
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              color="success"
              variant="outlined"
            >
              Vue js
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LessonDialog;
