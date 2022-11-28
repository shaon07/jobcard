import { Button } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context";
import styles from './register.module.css';

export default function Register() {
  const router = useNavigate();
  const { signUp, error, } = useUserAuth()
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    full_name: "",
    birthDate: "",
    gender: "",
    phone_number: ""
  })

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(userInfo)
  }


  return (
    <div className={`${styles.registerWrapper}`}>
      <form className={`${styles.registerForm}`} onSubmit={handleSubmit}>
        <code style={{ color: "red", marginBottom: "20px" }}>{error && JSON.stringify(error)}</code>
        <div className={`${styles.registerEmail} ${styles.inputBox}`}>
          <label htmlFor="text">Full Name</label>
          <input
            type="text"
            id="text"
            name="full_name"
            required
            value={userInfo.full_name}
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
            name="birthDate"
            required
            value={userInfo.birthDate}
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.registerEmail} ${styles.inputBox}`}>
          <label htmlFor="gender">{userInfo.gender || "Select gender"}</label>
          <select
            name="gender"
            value={userInfo.gender || "Select gender"}
            onChange={(e) => setUserInfo({ ...userInfo, gender: e.target.value })}
          >
            <option value="Select">Select</option>,
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
            name="phone_number"
            required
            value={userInfo.phone_number}
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
