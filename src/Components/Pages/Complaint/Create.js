import React, { useEffect, useState } from 'react'
import { GeneralBtn } from '../../../Components/Buttons'
import { useNavigate } from 'react-router-dom'
import { GetData, Lang, Post } from '../../../Components/Functions'

function Create({user}) {
    const [images, setImages] = useState([])
    const [title, setTitle] = useState("")
    const [periode, setPeriode] = useState("")
    const [desc, setDesc] = useState("")

    const [loading, setLoading] = useState(false)

    const cond = images === "" || title === "" || periode === "" || desc === ""

    const date = new Date()
    const complaint = {
        "images": images,
        "title": title,
        "property": periode,
        "desc": desc,
        "date":{
            "month": date.getMonth()+1,
            "year": date.getFullYear(),
        },
        "complainer": user?.email
    }

    const navigate = useNavigate()
    const Create = () => {
        const navigatee = () => {
            navigate('/complaints/')
            window.location.reload()
        }

        Post('/complaints', complaint, navigatee, setLoading)
    }


    const [imagesUrl, setImagesUrl] = useState([])
    
    const selectImage = (e) => {
        setImages([...e.target.files])
    }

    useEffect(()=> {
        if(images.length < 1 ) return
        const newImagesUrls = []
        images.forEach(image => newImagesUrls.push(URL.createObjectURL(image)))
        setImagesUrl(newImagesUrls)
    }, [images])

    console.log("Images:", images);

    const priorities = GetData('/priorities').data

  return (
    <div className={`${Lang()?.title === "ar" && "text-right"} max-w-screen-xl mx-auto p-4`}>
        <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl mb-10">
            {Lang()?.Ccreate.Ptitle}
        </h1>
        <div className="px-8 md:px-40 lg:px-80 mb-40">
            <label htmlFor="title" className="block mb-2 font-medium"> {Lang()?.Ccreate.images} </label>
            <div className="flex items-center justify-center w-full mb-6">
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-400 dark:hover:border-gray-500 dark:hover:bg-gray-200">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG</p>
                    </div>
                    <input multiple id="dropzone-file" type="file" className="hidden" accept="images/*" onChange={(e) => selectImage(e)}/>
                </label>
            </div> 
            <div className='flex flex-grow mb-8 space-x-2'>
                {imagesUrl.map((item, key)=>(
                    <div key={key} className='logo rounded w-52 overflow-hidden'>
                        <img className='w-full h-full' src={item} />
                    </div>
                ))}
            </div>

            <div className="mb-6">
                <label htmlFor="title" className="block mb-2 font-medium"> {Lang()?.Ccreate.title} </label>
                <input type="text" className={Lang()?.title === "ar" ? "text-right" : ""} id="title" required onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div className="mb-6">
                <label htmlFor="priorite" className="block mb-2 font-medium"> {Lang()?.Ccreate.priority} </label>
                <select onChange={(e)=> setPeriode(e.target.value)} className="bg-gray-50 border-2 outline-none border-gray-400 text-gray-900 text-sm rounded-lg  block w-full p-2.5" >
                    <option value=""></option>
                    {priorities?.map((item,key)=>(
                        <option key={key} value={item.title}> {item.title} </option>
                    ))}
                </select>
            </div>
            <div className="mb-6">
                <label htmlFor="priorite" className="block mb-2 font-medium"> {Lang()?.Ccreate.desc} </label>
                <textarea className={`${Lang()?.title === "ar" ? "text-right" : ""} block p-2.5 w-full text-sm rounded-lg outline-none border-2 border-gray-400`} onChange={(e)=> setDesc(e.target.value)} id="message" rows="4" placeholder={Lang()?.Ccreate.message} ></textarea>
            </div>

            <GeneralBtn text={Lang()?.Ccreate.create} condition={cond} fun={Create} loading={loading} />
        </div>
    </div>
  )
}

export default Create