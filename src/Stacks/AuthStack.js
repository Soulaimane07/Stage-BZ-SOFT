import React from 'react'
import Login from '../Pages/Auth/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Auth/Signup/Signup'

function AuthStack() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  )
}

export default AuthStack