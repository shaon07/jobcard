import React from 'react'
import { Route, Routes } from "react-router-dom"
import Homepage from "../components/Homepage"
import Login from "../components/Login"
import Register from "../components/Login/register"
import { useUserAuth } from "../context"

export default function RoutesProvider() {
  const { user } = useUserAuth();

  console.log(user)

  return (
    user ?
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
      :
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes></>


  )
}
