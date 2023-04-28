import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Agent/Home/Home'
import Navbar from '../../Pages/Agent/Navbar/Navbar'
import Profile from '../../Components/Pages/Profile'
import Complaint from '../../Pages/Client/Complaint/Complaint'
import Users from '../../Pages/Agent/Users/Users'
import Create from '../../Pages/Client/Complaint/Create'
import CreateUser from '../../Components/Pages/CreateUser'
import Footer from '../../Components/Footer'

function AgentStack({user}) {
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
    },
    {
      "image":"./images/got.jfif",
      "title":"Complaint 4",
      "property":"Property 4",
      "desc":"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      "image":"./images/got.jfif",
      "title":"Complaint 5",
      "property":"Property 5",
      "desc":"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
  ]
  const usersList = []

  const footerPages = [
    {
      "title":"Dashboard",
      "link":"/"
    },
    {
      "title":"Complaints",
      "link":"/complaints"
    },
    {
      "title":"Users",
      "link":"/users"
    },
  ]

  return (
    <>
        <div style={{marginTop: 140, minHeight: "90vh"}}>
            <Routes>
                <Route path="/" element={<Home user={user} complaints={complaintsList} users={usersList} />} />
                <Route path="/complaints">
                  <Route path='' element={<Complaint title="Complaints" data={complaintsList} />} />
                  <Route path='create' element={<Create />} />
                </Route>
                <Route path="/users">
                  <Route path='' element={<Users title="Users" data={usersList} />} />
                  <Route path='create' element={<CreateUser />} />
                </Route>
                <Route path="/profile" element={<Profile user={user} />} />
            </Routes>
        </div>
        <Navbar user={user} />
        <Footer pages={footerPages} />
    </>
  )
}

export default AgentStack