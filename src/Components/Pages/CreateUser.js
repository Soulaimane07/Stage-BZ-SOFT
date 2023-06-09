import React, { useState } from 'react'
import CreateClient from './CreateUser/CreateClient'
import CreateAgent from './CreateUser/CreateAgent'
import CreateCompany from './CreateUser/CreateCompany'
import { useNavigate } from 'react-router-dom'
import { CreateUserFun, Lang } from '../Functions'

function CreateUser() {
    const lang = Lang()

    const [plan, setPlan] = useState("")
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    const plans = [
        {
            "title":lang?.Cuser?.client,
            "val":"client"
        },
        {
            "title":lang?.Cuser?.agent,
            "val":"agent"
        },
        {
            "title":lang?.Cuser?.company,
            "val":"company"
        },
    ]

    const navigate = useNavigate('')

  return (
    <div className={`${lang?.title === "ar" && "text-right"} max-w-screen-xl mx-auto p-4`}>
        <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl mb-10"> 
            {lang?.Cuser?.title}
        </h1>
        <div className="px-8 md:px-40 lg:px-80 mb-40">
            <div>
                <div className='mb-10 createUser space-x-4 flex justify-between'>
                    {plans.map((item,key)=>(
                        <button onClick={()=> setPlan(item.val)} key={key} className={`py-2 rounded flex-1 ${item.val === plan ? "bg-orange-500 text-white" : "bg-slate-200"}`}>
                            <h1> {item.title} </h1>
                        </button>
                    ))}
                </div>

                <div className='mx-2 md:mx-6 lg:mx-10'>
                    {plan === "client" && <CreateClient fun={CreateUserFun} setMessage={setMessage} setLoading={setLoading} navigate={navigate} message={message} loading={loading} />}
                    {plan === "agent" && <CreateAgent fun={CreateUserFun} setMessage={setMessage} setLoading={setLoading} navigate={navigate} message={message} loading={loading} />}
                    {plan === "company" && <CreateCompany fun={CreateUserFun} setMessage={setMessage} setLoading={setLoading} navigate={navigate} message={message} loading={loading} />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUser