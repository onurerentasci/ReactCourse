import React from "react";
import { Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const LessonButton = () => {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </Stack>
      <Stack direction="row" spacing={3} display="block">
        <Button variant="outlined" size="small">
          Primary
        </Button>
        <Button variant="outlined" size="medium">
          Primary
        </Button>
        <Button variant="outlined" size="large">
          Primary
        </Button>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Button variant="contained" startIcon={<AddIcon />}>
          Ekle
        </Button>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => alert("Tıklandı")}
        >
          Ekle
        </Button>
      </Stack>
    </Stack>
  );
};
