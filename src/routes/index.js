import React from 'react'
import { Route, Routes } from "react-router-dom"
import Homepage from "../components/Homepage"
import Login from "../components/Login"
import { useUserAuth } from "../context"

export default function RoutesProvider() {
  const { user } = useUserAuth();

  return (
    user ?
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
      :
      <>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes></>


  )
}
