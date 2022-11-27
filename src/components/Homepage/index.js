import { Box } from "@mui/material"
import { Container } from "@mui/system"
import React from 'react'
import AccordionCard from "../Accordion"
import styles from './homepage.module.css'

export default function Homepage() {
  return (
    <div className={`${styles.homepageWrapper}`}>
      <Container className={`${styles.container}`}>
        <Box className={`${styles.homepageHeading}`}>
          <h2>BROWSE OPEN POSITIONS BY CATEGORY</h2>
          <p>We are always on the lookout for talanted people</p>
        </Box>

        <Box>
          <AccordionCard />
          <AccordionCard />
        </Box>
      </Container>
    </div>
  )
}
