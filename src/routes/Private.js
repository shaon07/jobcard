import React from 'react'
import { Route, Routes } from "react-router-dom"
import Homepage from "../components/Homepage"
import Invalid from '../components/Invalid'

export default function Private() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Invalid />} />
    </Routes>
  )
}
