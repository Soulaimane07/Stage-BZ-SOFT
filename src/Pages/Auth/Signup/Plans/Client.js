import React, { useState } from 'react'
import { GeneralBtn } from '../../../../Components/Buttons'
import { PlansHeader } from '../../../../Components/Headers'
import { useNavigate } from 'react-router-dom'

function Client({step, setStep}) {
    const [email, setEmail] = useState("")
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [pass, setPass] = useState("")

    const cond = email === "" || fName === "" || lName === "" || pass?.length < 6

    const client = {
        email: email,
        fname: fName,
        lname: lName,
        pass: pass,
        type: "client"
    }

    const navigate = useNavigate()
    const login = () => {
        localStorage.setItem('Rec-user', JSON.stringify(client))
        navigate('/')
        window.location.reload()
        console.log(client);
    }

  return (
    <div>
        {PlansHeader("Create client account", step, setStep)}

        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium">Email Adress</label>
            <input type="email" id="email" required onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="text" className="block mb-2 font-medium">First name</label>
            <input type="text" id="first name" required onChange={(e)=> setFname(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="text" className="block mb-2 font-medium">Last name</label>
            <input type="text" id="last name" required onChange={(e)=> setLname(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-medium">Password</label>
            <input type="password" id="password" required onChange={(e)=> setPass(e.target.value)} />
        </div>

        {GeneralBtn("Create", cond, login)}
    </div>
  )
}

export default Client