import React, { useState } from 'react'
import Image from './Image'
import { GeneralBtn } from '../../Components/Buttons'
import { Link } from 'react-router-dom'
import { Lang } from '../../Components/Functions'

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

    const lang = Lang()

  return (
    <div className={`${lang?.title === "ar" && "text-right"} Login grid mx-auto xl:gap-0 lg:grid-cols-12`}>
        <div className='w-full md:px-40 px-10 mx-auto mr-auto lg:col-span-4 lg:px-10'>
            <img className='logo' src='./images/logo.jpeg' alt='Logo' />
            <div className='mt-6'>
                <h1 style={{fontSize: 30, marginBottom: 20, paddingRight: 40, paddingLeft: 40, textAlign: 'center'}}> {lang?.login.title} </h1>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 font-medium"> {lang?.profile?.email} </label>
                    <input type="email" id="email" required onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 font-medium"> {lang?.profile?.pass} </label>
                    <input type="password" id="password" required onChange={(e)=> setPass(e.target.value)} />
                </div>
                <GeneralBtn text={lang?.login.login} condition={cond} fun={login} />

                <div className={`${lang?.title === "ar" && 'flex-row-reverse'} mt-8 flex items-center`}>
                    <p> {lang?.login.account} </p>
                    <Link to={"/signup"} className='text-orange-400 ml-2'> {lang?.login.signup} </Link>
                </div>
            </div>
        </div>
        <Image />
    </div>
  )
}

export default Login