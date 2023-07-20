import React, { useState } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

function LessonLoadingButton() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <Stack>
      <LoadingButton variant="outlined" loading={loading} onClick={handleClick}>
        Kaydet
      </LoadingButton>
    </Stack>
  );
}

export default LessonLoadingButton;
