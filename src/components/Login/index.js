import { Button } from "@mui/material"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import styles from './login.module.css'

export default function Login() {
  const router = useNavigate()
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })

  return (
    <div className={`${styles.loginWrapper}`}>
      <form className={`${styles.loginForm}`}>
        <div className={`${styles.loginEmail} ${styles.inputBox}`}>
          <label htmlFor="email">Email Address</label>
          <input type="text"
            id="email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
        </div>
        <div className={`${styles.loginPassword} ${styles.inputBox}`}>
          <label htmlFor="email">Password</label>
          <input type="password"
            id="password"
            value={userInfo.password}
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          />
        </div>

        <div className={`${styles.formBtn}`}>
          <Button color="success" variant="contained">Login</Button>
          <code onClick={() => router("/register")}>Dont have a account ?</code>
        </div>
      </form>
    </div>
  )
}
