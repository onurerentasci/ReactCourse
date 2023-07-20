import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";

export const LessonRadioGroup = () => {
  const [value, setValue] = useState("");
  console.log(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel color="secondary">Maaş Beklentisi</FormLabel>
      <RadioGroup
        row
        name="expected-salary"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          label="2000$"
          value="2000"
          control={<Radio color="secondary" />}
        />
        <FormControlLabel
          label="3000$"
          value="3000"
          control={<Radio color="secondary" />}
        />
        <FormControlLabel
          label="4000$"
          value="4000"
          control={<Radio color="secondary" />}
        />
      </RadioGroup>
      <FormHelperText>Beklentiniz Nedir</FormHelperText>
    </FormControl>
  );
};
