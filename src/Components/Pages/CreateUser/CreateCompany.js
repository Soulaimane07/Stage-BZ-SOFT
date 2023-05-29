import React, { useState } from 'react'
import { GeneralBtn } from '../../Buttons'
import { Lang } from '../../Functions'
import Alert from '../../Alert'

function CreateCompany({fun, message, setMessage, setLoading, loading, navigate}) {
    const [cName, setCname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [pass, setPass] = useState("")

    const cond = cName === "" || email === "" || phone === "" || pass?.length <= 7

    const company = {
        cname: cName,
        email: email,
        phone: phone,
        pass: pass,
        type: "company"
    }

    const lang = Lang()

  return (
    <div>
        {message && <Alert message={message} />}

        <div className="mb-6">
            <label htmlFor="company name" className="block mb-2 font-medium"> {lang?.profile?.cname} </label>
            <input type="text" id="company name" required onChange={(e)=> setCname(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium"> {lang?.profile?.email} </label>
            <input type="email" id="email" required onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 font-medium"> {lang?.profile?.phone} </label>
            <input type="tel" id="phone" required onChange={(e)=> setPhone(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-medium"> {lang?.profile?.pass} </label>
            <input type="password" id="password" required onChange={(e)=> setPass(e.target.value)} />
        </div>

        <GeneralBtn text={lang?.Ccreate?.create} condition={cond} fun={()=> fun(setMessage, setLoading, company, navigate)} data={company} loading={loading} />
    </div>
  )
}

export default CreateCompany