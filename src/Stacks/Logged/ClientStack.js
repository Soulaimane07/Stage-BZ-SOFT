import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Client/Home/Home'
import Nav from '../../Pages/Client/Navbar/Nav'
import Complaint from '../../Pages/Client/Complaint/Complaint'
import Create from '../../Pages/Client/Complaint/Create'

function ClientStack({user}) {
  return (
    <>
      <div style={{marginTop: 90, minHeight: "100vh"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complaints">
            <Route path="" element={<Complaint />} />
            <Route path="create" element={<Create />} />
          </Route>
        </Routes>
      </div>
      <Nav user={user} />
    </>
  )
}

export default ClientStack