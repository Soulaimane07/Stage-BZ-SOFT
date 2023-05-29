import React, { useState } from 'react'
import { GeneralBtn } from '../../Buttons'
import { Lang } from '../../Functions'
import Alert from '../../Alert'

function CreateClient({fun, message, loading, setMessage, setLoading, navigate}) {
    const [email, setEmail] = useState("")
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [pass, setPass] = useState("")

    const cond = email === "" || fName === "" || lName === "" || pass?.length <= 7
    const client = {
        email: email,
        fname: fName,
        lname: lName,
        pass: pass,
        type: "client"
    }

    const lang = Lang()

  return (
    <div>
        {message && <Alert message={message} />}

        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium"> {lang?.profile?.email} </label>
            <input type="email" id="email" required onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="text" className="block mb-2 font-medium"> {lang?.profile?.fname} </label>
            <input type="text" id="first name" required onChange={(e)=> setFname(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="text" className="block mb-2 font-medium"> {lang?.profile?.lname} </label>
            <input type="text" id="last name" required onChange={(e)=> setLname(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-medium"> {lang?.profile?.pass} </label>
            <input type="password" id="password" required onChange={(e)=> setPass(e.target.value)} />
        </div>

        <GeneralBtn text={lang?.Ccreate?.create} condition={cond} fun={()=> fun(setMessage, setLoading, client, navigate)} data={client} loading={loading} />
    </div>
  )
}

export default CreateClient