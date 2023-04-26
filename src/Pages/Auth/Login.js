import React, { useState } from 'react'
import Image from './Image'
import { GeneralBtn } from '../../Components/Buttons'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const cond = email === "" || pass?.length < 6

    const user = {
        email: email,
        pass: pass
    }

    const login = () => {
        localStorage.setItem('Rec-user', JSON.stringify(user))
        console.log(user);
    }

  return (
    <div className='Login grid mx-auto xl:gap-0 lg:grid-cols-12'>
        <div className='px-10 mx-auto mr-auto lg:col-span-5 lg:px-10'>
            <img className='logo' src='./images/logo.jpeg' alt='Logo' />
            <div className='mt-6'>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 font-medium">Email Adress</label>
                    <input type="email" id="email" required onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 font-medium">Password</label>
                    <input type="password" id="password" required onChange={(e)=> setPass(e.target.value)} />
                </div>
                {GeneralBtn("Login", cond, login)}

                <div style={{marginTop: 20, flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                    <p> Don't you have an account? </p>
                    <Link to={"/signup"} className='text-orange-400 ml-2'> Sign up </Link>
                </div>
            </div>
        </div>
        <Image />
    </div>
  )
}

export default Login