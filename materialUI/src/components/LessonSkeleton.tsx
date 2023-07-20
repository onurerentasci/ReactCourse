import React, { useState } from "react";
import { Skeleton, Button, Snackbar, Stack, Box } from "@mui/material";

function LessonSkeleton() {
  const [loading, setLoading] = useState<boolean>(true);

  const handleChange = () => {
    if (loading === true) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  return (
    <Stack sx={{ width: 256 }}>
      {loading ? (
        <Skeleton height={144} width={256} animation="wave" />
      ) : (
        <img
          src="https://source.unsplash.com/random/256*144"
          alt="skeleton"
          height={144}
          width={256}
        />
      )}
      <Button variant="contained" color="success" onClick={handleChange}>Switch</Button>
    </Stack>
  );
}

export default LessonSkeleton;
