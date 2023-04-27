import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Agent/Home/Home'
import Navbar from '../../Pages/Agent/Navbar/Navbar'
import Profile from '../../Pages/Agent/Profile/Profile'
import Complaint from '../../Pages/Client/Complaint/Complaint'
import Users from '../../Pages/Agent/Users/Users'
import Create from '../../Pages/Client/Complaint/Create'

function AgentStack({user}) {
  const complaintsList = []
  const usersList = []

  return (
    <>
        <div style={{marginTop: 130, minHeight: "100vh"}}>
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/complaints">
                  <Route path='' element={<Complaint title="Complaints" data={complaintsList} />} />
                  <Route path='create' element={<Create />} />
                </Route>
                <Route path="/users" element={<Users title="Users" data={usersList} />} />
                <Route path="/profile" element={<Profile user={user} />} />
            </Routes>
        </div>
        <Navbar user={user} />
    </>
  )
}

export default AgentStack