import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GetData, Lang } from '../../Components/Functions'

import Home from '../../Pages/Agent/Home/Home'
import Navbar from '../../Pages/Agent/Navbar/Navbar'

import Users from '../../Pages/Agent/Users/Users'
import CreateUser from '../../Components/Pages/CreateUser'
import Priorities from '../../Pages/Agent/Priorities/Priorities'
import CreatePriority from '../../Pages/Agent/Priorities/CreatePriority'

import Complaint from '../../Components/Pages/Complaint/Complaint'
import Create from '../../Components/Pages/Complaint/Create'
import Details from '../../Components/Pages/Complaint/Details'
import Profile from '../../Components/Pages/Profile'
import Footer from '../../Components/Footer'

function AgentStack({user}) {
  const usersList = GetData('/users').data 
  const complaintsList = GetData('/complaints').data 
  const answersList = GetData('/comments').data 

  const footerPages = [
    {
      "title": Lang()?.footer.dashboard,
      "link":"/"
    },
    {
      "title": Lang()?.footer.complaints,
      "link":"/complaints"
    },
    {
      "title": Lang()?.footer.users,
      "link":"/users"
    },
  ]

  return (
    <>
      <div style={{marginTop: 140, minHeight: "90vh"}}>
          <Routes>
              <Route path="/" element={<Home complaints={complaintsList} answersList={answersList} users={usersList} />} />
              <Route path="/complaints">
                <Route path='' element={<Complaint data={complaintsList} />} />
                <Route path='create' element={<Create user={user} />} />
                <Route path=':id' element={<Details user={user} />} />
              </Route>
              <Route path="/priorities">
                <Route path='' element={<Priorities />} />
                <Route path='create' element={<CreatePriority />} />
              </Route>
              <Route path="/users">
                <Route path='' element={<Users data={usersList} user={user} />} />
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