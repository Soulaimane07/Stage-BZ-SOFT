import React, { useState } from 'react'
import { GeneralBtn } from '../../Buttons'

function CreateCompany({fun}) {
    const [cName, setCname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [pass, setPass] = useState("")

    const cond = cName === "" || email === "" || phone === "" || pass?.length < 6

    const company = {
        cname: cName,
        email: email,
        phone: phone,
        pass: pass,
        type: "company"
    }

  return (
    <div>
        <div className="mb-6">
            <label htmlFor="company name" className="block mb-2 font-medium">Company Name</label>
            <input type="text" id="company name" required onChange={(e)=> setCname(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium">Email Adress</label>
            <input type="email" id="email" required onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
            <input type="tel" id="phone" required onChange={(e)=> setPhone(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-medium">Password</label>
            <input type="password" id="password" required onChange={(e)=> setPass(e.target.value)} />
        </div>

        <GeneralBtn text="Create" condition={cond} fun={fun} data={company} />
    </div>
  )
}

export default CreateCompany