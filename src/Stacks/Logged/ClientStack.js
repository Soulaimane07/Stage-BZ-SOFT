import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Client/Home/Home'
import Nav from '../../Pages/Client/Navbar/Nav'
import Complaint from '../../Pages/Client/Complaint/Complaint'
import Create from '../../Pages/Client/Complaint/Create'
import Profile from '../../Components/Pages/Profile'
import Footer from '../../Components/Footer'
import { Lang } from '../../Components/Functions'

function ClientStack({user}) {
  const complaintsList = [
  ]

  const footerPages = [
    {
      "title": Lang()?.footer.dashboard,
      "link":"/"
    },
    {
      "title": Lang()?.footer.complaints,
      "link":"/complaints"
    }
  ]

  return (
    <>
      <div style={{marginTop: 100, minHeight: "90vh"}}>
        <Routes>
          <Route path="/" element={<Home data={complaintsList} />} />
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

export default ClientStack