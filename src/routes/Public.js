import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from "../components/Login"
import Register from "../components/Login/register"

export default function Public() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
