import { Button } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context";
import styles from './login.module.css';

export default function Login() {
  const router = useNavigate();
  const { logIn } = useUserAuth()
  const [error, setError] = useState()
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(userInfo.email, userInfo.password)
    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <div className={`${styles.loginWrapper}`}>
      <form className={`${styles.loginForm}`} onSubmit={handleSubmit}>
        <code style={{ color: "red", marginBottom: "20px" }}>{error}</code>
        <div className={`${styles.loginEmail} ${styles.inputBox}`}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            required
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
        </div>
        <div className={`${styles.loginPassword} ${styles.inputBox}`}>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            required
            value={userInfo.password}
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          />
        </div>

        <div className={`${styles.formBtn}`}>
          <Button color="success" type="submit" variant="contained">Login</Button>
          <code onClick={() => router("/register")}>Dont have a account ?</code>
        </div>
      </form>
    </div>
  )
}
