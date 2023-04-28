import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Nav from '../../Pages/Client/Navbar/Nav'
import Home from '../../Pages/Client/Home/Home'
import Profile from '../../Components/Pages/Profile'
import Complaint from '../../Pages/Client/Complaint/Complaint'
import Create from '../../Pages/Client/Complaint/Create'

function CompanyStack({user}) {
  const complaintsList = []
    const footerPages = [
        {
          "title":"Dashboard",
          "link":"/"
        },
        {
          "title":"Complaints",
          "link":"/complaints"
        },
    ]

  return (
    <>
      <div style={{marginTop: 100, minHeight: "90vh"}}>
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
      <Footer pages={footerPages} />
    </>
  )
}

export default CompanyStack