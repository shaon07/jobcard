import { Button } from "@mui/material"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useUserAuth } from "../../../context"
import styles from './register.module.css'

export default function Register() {
  const router = useNavigate()
  const { signUp } = useUserAuth();
  const [error, setError] = useState()

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(userInfo.email, userInfo.password)
      router('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className={`${styles.registerWrapper}`}>
      <form className={`${styles.registerForm}`} onSubmit={handleSubmit}>
        <code style={{ color: "red", marginBottom: "20px" }}>{error}</code>
        <div className={`${styles.registerEmail} ${styles.inputBox}`}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            required
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
        </div>
        <div className={`${styles.registerPassword} ${styles.inputBox}`}>
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
          <Button color="info" type="submit" variant="contained">register</Button>
          <code onClick={() => router('/')}>Already have an account ?</code>
        </div>
      </form>
    </div>
  )
}
