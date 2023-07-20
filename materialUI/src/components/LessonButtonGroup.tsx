import React from "react";
import { Button, Stack, ButtonGroup } from "@mui/material";

export const LessonButtonGroup = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>Butonum</Button>
          <Button>Butonum</Button>
          <Button>Butonum</Button>
          <Button>Butonum</Button>
        </ButtonGroup>
      </Stack>
      <Stack>
        <ButtonGroup variant="outlined">
          <Button>Butonum</Button>
          <Button>Butonum</Button>
          <Button>Butonum</Button>
          <Button>Butonum</Button>
        </ButtonGroup>
      </Stack>
      <Stack>
        <ButtonGroup variant="text" orientation="vertical">
          <Button>Butonum</Button>
          <Button>Butonum</Button>
          <Button>Butonum</Button>
          <Button>Butonum</Button>
        </ButtonGroup>
      </Stack>
      <Stack>
        <ButtonGroup
          variant="text"
          size="small"
          color="secondary"
          orientation="vertical"
        >
          <Button>Butonum</Button>
          <Button>Butonum</Button>
          <Button>Butonum</Button>
          <Button>Butonum</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
