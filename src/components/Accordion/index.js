import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Accordion, Button } from "@mui/material";
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import React, { useState } from "react";
import styles from './accordion.module.css';

export default function AccordionCard({ id }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={`${styles.jobCard}`}>
      <Accordion expanded={expanded === 1} onChange={handleChange(1)} className={`${styles.accoundion}`}>
        <AccordionSummary
          expandIcon={expanded === 1 ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1bh-content"
          id={id}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }} className={`${styles.heading}`}>
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={`${styles.jobs}`}>
            <b>Sales Manager</b>
            <div className={`${styles.buttonGroup}`}>
              <Button>Delete</Button>
              <Button>Apply Now</Button>
            </div>
          </Box>
          <Box className={`${styles.jobs}`}>
            <b>Sales Manager</b>
            <div className={`${styles.buttonGroup}`}>
              <Button>Delete</Button>
              <Button>Apply Now</Button>
            </div>
          </Box>
          <Box className={`${styles.jobs}`}>
            <b>Sales Manager</b>
            <div className={`${styles.buttonGroup}`}>
              <Button>Delete</Button>
              <Button>Apply Now</Button>
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}