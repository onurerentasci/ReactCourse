import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export const LessonSelect = () => {
  const [country, setCountry] = useState("");
  console.log(country);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Ülke Seçiniz"
        select
        fullWidth
        value={country}
        onChange={handleChange}
      >
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="US">ABD</MenuItem>
        <MenuItem value="FR">Fransa</MenuItem>
      </TextField>
    </Box>
  );
};
