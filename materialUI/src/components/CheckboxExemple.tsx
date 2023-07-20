import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

export const CheckboxExemple = () => {
  const [knowledge, setKnowledge] = useState<string[]>([]);
  console.log(knowledge);

  const handleKnowledgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = knowledge.indexOf(event.target.value);
    if (index === -1) {
      setKnowledge([...knowledge, event.target.value]);
    } else {
      setKnowledge(knowledge.filter((item) => item !== event.target.value));
    }
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Hangi Frontend Frameworklerini Biliyorsun</FormLabel>
        <FormGroup row>
          <FormControlLabel
            value="react"
            control={
              <Checkbox
                checked={knowledge.includes("react")}
                onChange={handleKnowledgeChange}
              />
            }
            label="React js"
          />
          <FormControlLabel
            value="angular"
            control={
              <Checkbox
                checked={knowledge.includes("angular")}
                onChange={handleKnowledgeChange}
              />
            }
            label="Angular"
          />
          <FormControlLabel
            value="vue"
            control={
              <Checkbox
                checked={knowledge.includes("vue")}
                onChange={handleKnowledgeChange}
              />
            }
            label="Vue js"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
