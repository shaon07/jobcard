import { Box } from "@mui/material"
import { Container } from "@mui/system"
import React, { useState } from 'react'
import { useUserAuth } from "../../context"
import AccordionCard from "../Accordion"
import Header from "../Header"
import BasicModal from "../modal"
import styles from './homepage.module.css'

export default function Homepage() {
  const { post, loading } = useUserAuth();
  const [expanded, setExpanded] = useState(false);

  const fullTime = post?.filter(item => item?.jobType === 'full_time')
  const partTime = post?.filter(item => item?.jobType === 'part_time')
  const intern = post?.filter(item => item?.jobType === 'internship')

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
          {fullTime.length > 0 && <AccordionCard id={1} post={{ category: "Full Time", item: fullTime }} expanded={expanded} setExpanded={setExpanded} />}
          {
            partTime.length > 0 && <AccordionCard id={2} post={{ category: "Part Time", item: partTime }} expanded={expanded} setExpanded={setExpanded} />
          }
          {
            intern.length > 0 && <AccordionCard id={3} post={{ category: "Internship", item: intern }} expanded={expanded} setExpanded={setExpanded} />
          }
        </Box>
      </Container>
      <BasicModal />
    </div>
  )
}
