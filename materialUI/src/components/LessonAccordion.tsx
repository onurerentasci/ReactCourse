import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const LessonAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(expanded);
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      <div className="basic-accordion">
        {/* <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" component="h2">
              İlk Bölüm
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod
            magnam, fugit quo repellendus optio beatae? Vero corrupti
            praesentium soluta, eum necessitatibus tenetur error itaque vitae
            consectetur. Quaerat, iusto! Soluta!
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" component="h2">
              İkinci Bölüm
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod
            magnam, fugit quo repellendus optio beatae? Vero corrupti
            praesentium soluta, eum necessitatibus tenetur error itaque vitae
            consectetur. Quaerat, iusto! Soluta!
          </AccordionDetails>
        </Accordion>

        <Accordion disabled>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" component="h2">
              Üçüncü Bölüm
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod
            magnam, fugit quo repellendus optio beatae? Vero corrupti
            praesentium soluta, eum necessitatibus tenetur error itaque vitae
            consectetur. Quaerat, iusto! Soluta!
          </AccordionDetails>
        </Accordion> */}
      </div>
      <div className="advenced-accordion">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" component="h2">
              İlk Bölüm
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod
            magnam, fugit quo repellendus optio beatae? Vero corrupti
            praesentium soluta, eum necessitatibus tenetur error itaque vitae
            consectetur. Quaerat, iusto! Soluta!
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" component="h2">
              İkinci Bölüm
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod
            magnam, fugit quo repellendus optio beatae? Vero corrupti
            praesentium soluta, eum necessitatibus tenetur error itaque vitae
            consectetur. Quaerat, iusto! Soluta!
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" component="h2">
              Üçüncü Bölüm
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod
            magnam, fugit quo repellendus optio beatae? Vero corrupti
            praesentium soluta, eum necessitatibus tenetur error itaque vitae
            consectetur. Quaerat, iusto! Soluta!
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
