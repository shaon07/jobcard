import { Button } from "@mui/material";
import React from 'react';
import { useUserAuth } from "../../context";
import styles from './header.module.css';

export default function Header() {
  const { logOut, handleOpenModal } = useUserAuth();

  return (
    <div className={`${styles.headerWrapper}`}>
      <div className={`${styles.logo}`}>
        <b>LOGO</b>
      </div>
      <div className={`${styles.navitems}`}>
        <Button variant="contained" onClick={handleOpenModal}>Create Job</Button>
        <Button variant="contained" color="error" onClick={logOut}>Logout</Button>
      </div>
    </div>
  )
}
