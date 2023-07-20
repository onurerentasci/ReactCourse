import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

export const SelectExemple = () => {
  const [country, setCountry] = useState<string[]>([]); // multiple için boş string değil array olmalı
  // typescript sebebiyle string array tipi verilmeli
  console.log(country);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value
    );
  };
  return (
    <Box width="250px">
      <TextField
        SelectProps={{
          multiple: true,
        }}
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
