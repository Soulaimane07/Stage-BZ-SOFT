import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Client/Home/Home'
import Nav from '../../Pages/Client/Navbar/Nav'
import Complaint from '../../Pages/Client/Complaint/Complaint'
import Create from '../../Pages/Client/Complaint/Create'
import Profile from '../../Pages/Client/Profile/Profile'

function ClientStack({user}) {
  const complaintsList = []

  return (
    <>
      <div style={{marginTop: 90, minHeight: "100vh"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complaints">
            <Route path="" element={<Complaint title="Your Complaints" data={complaintsList} />} />
            <Route path="create" element={<Create />} />
          </Route>
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
      </div>
      <Nav user={user} />
    </>
  )
}

export default ClientStack