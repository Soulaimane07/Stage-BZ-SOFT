import React, { useState } from 'react'
import Image from './Image'
import { GeneralBtn } from '../../Components/Buttons'
import { Link, useNavigate } from 'react-router-dom'
import { Lang, LoginFun } from '../../Components/Functions'
import Alert from '../../Components/Alert'
import LanguageBox from '../../Components/LanguageBox'

function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const cond = email === "" || pass?.length <= 7

    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const lang = Lang()

  return (
    <div className={`${lang?.title === "ar" && "text-right flex-row-reverse "} Login flex flex-row`}>
        <div className='w-full md:w-2/3 md:mx-auto lg:w-1/2 px-8 py-8 '>
            <img className='logo' src='./images/logo.jpeg' alt='Logo' />

            <div className='mt-6'>
                <h1 style={{fontSize: 30, marginBottom: 20, paddingRight: 40, paddingLeft: 40, textAlign: 'center'}}> {lang?.login.title} </h1>
                {message && <Alert message={message} />}
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 font-medium"> {lang?.profile?.email} </label>
                    <input type="email" id="email" required onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 font-medium"> {lang?.profile?.pass} </label>
                    <input type="password" id="password" required onChange={(e)=> setPass(e.target.value)} />
                </div>
                <GeneralBtn text={lang?.login.login} condition={cond} fun={()=> LoginFun(email, pass, setMessage, setLoading, navigate)} loading={loading} />

                <div className={`${lang?.title === "ar" && 'flex-row-reverse'} mt-8 flex items-center`}>
                    <p> {lang?.login.account} </p>
                    <Link to={"/signup"} className='text-orange-400 ml-2'> {lang?.login.signup} </Link>
                </div>

                <LanguageBox />
            </div>
        </div>
        <div className='hidden lg:inline w-full'>
            <Image />
        </div>
    </div>
  )
}

export default Login