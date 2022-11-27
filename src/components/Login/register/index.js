import { Button } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context";
import styles from './register.module.css';

export default function Register() {
  const router = useNavigate();
  const { signUp } = useUserAuth()
  const [error, setError] = useState()
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    fullName: "",
    date: "",
    gender: "",
    phone: ""
  })

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(userInfo.email, userInfo.password)
    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <div className={`${styles.registerWrapper}`}>
      <form className={`${styles.registerForm}`} onSubmit={handleSubmit}>
        <code style={{ color: "red", marginBottom: "20px" }}>{error}</code>
        <div className={`${styles.registerEmail} ${styles.inputBox}`}>
          <label htmlFor="text">Full Name</label>
          <input
            type="text"
            id="text"
            name="fullName"
            required
            value={userInfo.fullName}
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.registerEmail} ${styles.inputBox}`}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.registerEmail} ${styles.inputBox}`}>
          <label htmlFor="date">Date of Birth</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={userInfo.date}
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.registerEmail} ${styles.inputBox}`}>
          <label htmlFor="date">Date of Birth</label>
          <select name="gender" value={userInfo.gender} onChange={handleChange}>
            <option value="Male">Male</option>,
            <option value="Female">Female</option>,
            <option value="Custom">Custom</option>,
          </select>
        </div>
        <div className={`${styles.registerPassword} ${styles.inputBox}`}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            id="phone"
            name="phone"
            required
            value={userInfo.phone}
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.registerPassword} ${styles.inputBox}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={userInfo.password}
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.formBtn}`}>
          <Button color="success" type="submit" variant="contained">register</Button>
          <code onClick={() => router("/register")}>Dont have a account ?</code>
        </div>
      </form>
    </div>
  )
}
