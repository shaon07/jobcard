import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { useUserAuth } from "../../context";
import styles from './modal.module.css';

const style = {
  position: 'absolute',
  top: "2rem",
  left: 0,
  right: 0,
  width: "90%",
  maxWidth: "700px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  margin: "auto",
  display: "block"
};

export default function BasicModal() {
  const { handleCloseModal, modalOpen, error, addPost } = useUserAuth()
  const [userInfo, setUserInfo] = useState({
    jobTitle: "",
    lastDateOfApply: "",
    level: "entry",
    shift: "day",
    location: "",
    vacancies: 125,
    jobType: "part_time",
    jobDescription: "",
    department: ""
  })

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost(userInfo, setUserInfo)
    // await signUp(userInfo)
  }

  return (

    <Modal
      open={modalOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form className={`${styles.modalForm}`} onSubmit={handleSubmit}>
          <code style={{ color: "red", marginBottom: "20px" }}>{error && JSON.stringify(error)}</code>
          <div className={`${styles.modalEmail} ${styles.inputBox}`}>
            <label htmlFor="text">Job Title</label>
            <input
              type="text"
              id="text"
              name="jobTitle"
              required
              value={userInfo.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.modalEmail} ${styles.inputBox}`}>
            <label htmlFor="text">level</label>
            <input
              type="text"
              id="text"
              name="level"
              required
              value={userInfo.level}
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.modalEmail} ${styles.inputBox}`}>
            <label htmlFor="lastDateOfApply">last Date OfApply</label>
            <input
              type="date"
              id="lastDateOfApply"
              name="lastDateOfApply"
              required
              value={userInfo.lastDateOfApply}
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.modalEmail} ${styles.inputBox}`}>
            <label htmlFor="shift">{userInfo.shift || "Select gender"}</label>
            <select
              name="shift"
              value={userInfo.shift || "Select shift"}
              onChange={(e) => setUserInfo({ ...userInfo, shift: e.target.value })}
            >
              <option value="day">Day</option>,
              <option value="night">Night</option>,
            </select>
          </div>
          <div className={`${styles.modalPassword} ${styles.inputBox}`}>
            <label htmlFor="location">location</label>
            <input
              type="text"
              id="location"
              name="location"
              required
              value={userInfo.location}
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.modalPassword} ${styles.inputBox}`}>
            <label htmlFor="vacancies">vacancies</label>
            <input
              type="number"
              id="vacancies"
              name="vacancies"
              required
              value={userInfo.vacancies}
              onChange={handleChange}
            />
          </div>

          <div className={`${styles.modalEmail} ${styles.inputBox}`}>
            <label htmlFor="jobType">{userInfo.jobType || "Select jobType"}</label>
            <select
              name="jobType"
              value={userInfo.jobType || "Select jobType"}
              onChange={(e) => setUserInfo({ ...userInfo, jobType: e.target.value })}
            >
              <option value="Select">Select</option>,
              <option value="full_time">full time</option>,
              <option value="part_time">part time</option>,
              <option value="internship">internship</option>,
            </select>
          </div>

          <div className={`${styles.modalPassword} ${styles.inputBox}`}>
            <label htmlFor="jobDescription">jobDescription</label>
            <textarea
              type="number"
              id="jobDescription"
              name="jobDescription"
              required
              value={userInfo.jobDescription}
              onChange={handleChange}></textarea>
          </div>

          <div className={`${styles.modalEmail} ${styles.inputBox}`}>
            <label htmlFor="department">department</label>
            <input
              type="text"
              id="text"
              name="department"
              required
              value={userInfo.department}
              onChange={handleChange}
            />
          </div>

          <div className={`${styles.formBtn}`}>
            <Button color="success" type="submit" variant="contained">Submit</Button>
          </div>
        </form>
      </Box>
    </Modal>

  );
}