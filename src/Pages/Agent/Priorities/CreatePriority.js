import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreatePriorityFun, Lang } from '../../../Components/Functions'
import { GeneralBtn } from '../../../Components/Buttons'

function CreatePriority() {
  const [title, setTitle] = useState("")
  const [color, setColor] = useState("")

  const [loading, setLoading] = useState(false)

    const cond = title === "" || color === ""

    const priority = {
        "color": color,
        "title": title,
    }


    const navigate = useNavigate()
    const Create = () => {
        const navigatee = () => {
            navigate('/priorities/')
        }

        CreatePriorityFun('/priorities', priority, navigatee, setLoading)
    }

  return (
    <div className={`${Lang()?.title === "ar" && "text-right"} max-w-screen-xl mx-auto p-4`}>
        <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl mb-10">
            {Lang()?.CPriority.title}
        </h1>
        <div className="px-8 md:px-40 lg:px-80 mb-40">
        <div className="mb-6">
            <label htmlFor="priorite" className="block mb-2 font-medium"> {Lang()?.CPriority.title1} </label>
            <input type="text" className={Lang()?.title === "ar" ? "text-right" : ""} id="priorite" required onChange={(e)=> setTitle(e.target.value)} />
        </div>
        <div className="mb-6">
            <label htmlFor="priorite" className="block mb-2 font-medium"> {Lang()?.CPriority.color} </label>
            <input onChange={(e)=> setColor(e.target.value)} type="color" name="color" id="color"  className={Lang()?.title === "ar" ? "text-right" : ""} required />
        </div>
        <GeneralBtn text={Lang()?.Ccreate.create} condition={cond} fun={Create} loading={loading} />
      </div>
    </div>
  )
}

export default CreatePriority