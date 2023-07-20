import React from "react";
import { Grid } from "@mui/material";

export const LessonGrid = () => {
  return (
    <Grid container>
      {/*toplam 12 birim, üste 8 alta 4 ayrılabiliyor*/}
      {/*12 birim üstüne çıkarsa otomatik olarak bir alt satıra iner*/}
      <Grid xs={8} sm={7}>
        8 birimlik yer
      </Grid>
      <Grid xs={4} sm={5}>
        4 birimlik yer
      </Grid>
    </Grid>
  );
};
