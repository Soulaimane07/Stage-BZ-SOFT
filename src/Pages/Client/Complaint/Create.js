import React, { useState } from 'react'
import { GeneralBtn } from '../../../Components/Buttons'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [periode, setPeriode] = useState("")
    const [desc, setDesc] = useState("")

    const cond = image === "" || title === "" || periode === "" || desc === ""

    const complaint = {
        image: image,
        title: title,
        periode: periode,
        desc: desc
    }

    console.log(complaint);

    const navigate = useNavigate()
    const Create = () => {
        navigate('/complaints/')
    }

  return (
    <div className='max-w-screen-xl mx-auto p-4'>
        <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl mb-10"> Create Complaint</h1>
        <div className="px-8 md:px-40 lg:px-80 mb-40">
            <div className="flex items-center justify-center w-full mb-6">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-400 dark:hover:border-gray-500 dark:hover:bg-gray-200">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input onChange={(e)=> setImage(e.target.value)} id="dropzone-file" type="file" className="hidden" />
                </label>
            </div> 
            <div className="mb-6">
                <label htmlFor="title" className="block mb-2 font-medium">Title</label>
                <input type="text" id="title" required onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div className="mb-6">
                <label htmlFor="priorite" className="block mb-2 font-medium">Priorite</label>
                <input type="text" id="priorite" required onChange={(e)=> setPeriode(e.target.value)} />
            </div>
            <div className="mb-6">
                <label htmlFor="priorite" className="block mb-2 font-medium">Description</label>
                <textarea onChange={(e)=> setDesc(e.target.value)} id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg border border-gray-500" placeholder="Write your thoughts here..."></textarea>
            </div>

            <GeneralBtn text="Create" condition={cond} fun={Create} />
        </div>
    </div>
  )
}

export default Create