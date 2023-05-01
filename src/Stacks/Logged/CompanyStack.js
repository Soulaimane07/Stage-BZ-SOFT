import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Nav from '../../Pages/Client/Navbar/Nav'
import Profile from '../../Components/Pages/Profile'
import Complaint from '../../Pages/Client/Complaint/Complaint'
import Create from '../../Pages/Client/Complaint/Create'
import Home from '../../Pages/Company/Home/Home'

function CompanyStack({user}) {
  const complaintsList = [
    {
      "image":"./images/got.jfif",
      "title":"Complaint 1",
      "property":"Property 1",
      "desc":"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      "image":"./images/got.jfif",
      "title":"Complaint 2",
      "property":"Property 2",
      "desc":"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      "image":"./images/got.jfif",
      "title":"Complaint 3",
      "property":"Property 3",
      "desc":"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    }
  ]

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

export default CompanyStack