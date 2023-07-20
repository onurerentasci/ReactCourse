import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

export const LessonCheckbox = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  console.log(isAccepted);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAccepted(event.target.checked);
  };

  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox />} label="Lise" />
            <FormControlLabel control={<Checkbox />} label="Lisans" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Yükseklisans"
            />
            <FormControlLabel disabled control={<Checkbox />} label="Doktora" />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={isAccepted} onChange={handleChange} />
              }
              label="Kullanım koşullarını kabul ediyorum"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
