import React from 'react'
import { Route, Routes } from "react-router-dom"
import Homepage from "../components/Homepage"

export default function Private() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  )
}
