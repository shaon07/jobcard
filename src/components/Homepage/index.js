import { Box } from "@mui/material"
import { Container } from "@mui/system"
import React from 'react'
import AccordionCard from "../Accordion"
import Header from "../Header"
import styles from './homepage.module.css'

export default function Homepage() {
  return (
    <div className={`${styles.homepageWrapper}`}>
      <Header />
      <Container className={`${styles.container}`}>
        <Box className={`${styles.homepageHeading}`}>
          <div className={`${styles.divider}`}></div>
          <h2>BROWSE OPEN POSITIONS BY CATEGORY</h2>
          <p>We are always on the lookout for talanted people</p>
        </Box>

        <Box>
          <AccordionCard id={1} />
        </Box>
      </Container>
    </div>
  )
}
