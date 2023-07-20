import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Button,
} from "@mui/material";

export const RadioGroupExemple = () => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === "Onur") {
      setHelperText("Doğru Cevap");
      setError(false);
    } else if (value === "Eren") {
      setHelperText("Tabiki Doğru Cevap");
      setError(false);
    } else {
      setHelperText("Lütfen bir seçim yapınız");
      setError(true);
    } 
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>Kim daha iyi</FormLabel>
        <RadioGroup row onChange={handleRadioChange}>
          <FormControlLabel value="Onur" label="Onur" control={<Radio />} />
          <FormControlLabel value="Eren" label="Eren" control={<Radio />} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Gönder
        </Button>
      </FormControl>
    </form>
  );
};
