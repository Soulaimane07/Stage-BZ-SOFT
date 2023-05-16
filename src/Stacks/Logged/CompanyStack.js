import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Nav from '../../Pages/Client/Navbar/Nav'
import Profile from '../../Components/Pages/Profile'
import Complaint from '../../Pages/Client/Complaint/Complaint'
import Create from '../../Pages/Client/Complaint/Create'
import Home from '../../Pages/Company/Home/Home'
import { GetData, Lang } from '../../Components/Functions'
import Details from '../../Pages/Client/Complaint/Details'

function CompanyStack({user}) {
  const complaintsList = GetData(`/getComplaints/${user?.email}`).data 


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
            <Route path="create" element={<Create user={user} />} />
            <Route path=":id" element={<Details user={user} />} />
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