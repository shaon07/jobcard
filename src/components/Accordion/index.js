import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Accordion, Button } from "@mui/material";
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import React from "react";
import { useUserAuth } from "../../context";
import styles from './accordion.module.css';

export default function AccordionCard({ post, id, expanded, setExpanded }) {

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  const { detelePost } = useUserAuth()
  console.log(post)

  return (
    <div className={`${styles.jobCard}`}>
      <Accordion expanded={expanded === id} onChange={handleChange(id)} className={`${styles.accoundion}`}>
        <AccordionSummary
          expandIcon={expanded === id ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1bh-content"
          id={id}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }} className={`${styles.heading}`}>
            {post.category}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {
            post.item.map(((job, index) => {
              return (
                <Box className={`${styles.jobs}`} key={index}>
                  <b>{job.jobTitle}</b>
                  <div className={`${styles.buttonGroup}`}>
                    <Button onClick={() => detelePost(job.id)}>Delete</Button>
                    <Button>Apply Now</Button>
                  </div>
                </Box>
              )
            }))
          }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}