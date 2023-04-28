import React, { useState } from 'react'
import CreateClient from './CreateUser/CreateClient'
import CreateAgent from './CreateUser/CreateAgent'
import CreateCompany from './CreateUser/CreateCompany'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
    const [plan, setPlan] = useState("")

    const plans = [
        {
            "title":"Client",
            "val":"client"
        },
        {
            "title":"Agent",
            "val":"agent"
        },
        {
            "title":"Company",
            "val":"company"
        },
    ]

    const navigate = useNavigate('')
    const Create = (user) => {
        navigate('/users')
        console.log(user);
    }

  return (
    <div className='max-w-screen-xl mx-auto p-4'>
        <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl mb-10"> Create User</h1>
        <div className="px-8 md:px-40 lg:px-80 mb-40">
            <div>
                <div className='mb-10 createUser space-x-4 flex justify-between'>
                    {plans.map((item,key)=>(
                        <button onClick={()=> setPlan(item.val)} key={key} className={`py-2 rounded flex-1 ${item.val === plan ? "bg-orange-500 text-white" : "bg-slate-200"}`}>
                            <h1> {item.title} </h1>
                        </button>
                    ))}
                </div>

                <div className='mx-10'>
                    {plan === "client" && <CreateClient fun={Create} />}
                    {plan === "agent" && <CreateAgent fun={Create} />}
                    {plan === "company" && <CreateCompany fun={Create} />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUser