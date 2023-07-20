import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

export const LessonTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={5}>
      <Stack direction="row" spacing={2}></Stack>
      <TextField label="Ad" />
      <TextField label="Ad" variant="outlined" />
      <TextField label="Ad" variant="filled" />
      <TextField label="Ad" variant="standard" />
      <TextField label="Ad" variant="outlined" size="small" color="error" />
      <TextField
        label="Ad"
        variant="outlined"
        helperText="Lütfen isminizi giriniz"
      />
      <TextField
        type="password"
        label="Ad"
        variant="outlined"
        helperText="Lütfen isminizi giriniz"
      />
      <TextField
        disabled
        type="password"
        label="Ad"
        variant="outlined"
        helperText="Lütfen isminizi giriniz"
      />
      <TextField
        InputProps={{ readOnly: true }}
        type="password"
        label="Ad"
        variant="outlined"
        helperText="Lütfen isminizi giriniz"
      />
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">TL</InputAdornment>,
        }}
        label="Toplam"
        variant="outlined"
      />
      <TextField
        InputProps={{
          endAdornment: <InputAdornment position="end">TL</InputAdornment>,
        }}
        label="Toplam"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="password"
        label="Şifre"
        variant="outlined"
        helperText={
          !value
            ? "Lütfen şifrenizi giriniz!"
            : "Şifrenizi kimseyle paylaşmayın"
        }
      />
    </Stack>
  );
};
