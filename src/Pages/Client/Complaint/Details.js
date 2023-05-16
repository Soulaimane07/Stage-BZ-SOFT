import React, { useState } from 'react'
import { GetData, Lang, ServerUrlPublic, deleteComplaint } from '../../../Components/Functions'
import {BiUser} from 'react-icons/bi'
import Comment from '../../../Components/Modals/Comment'
import { GeneralBtn } from '../../../Components/Buttons'
import { LogOutModal } from '../../../Components/Modals'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";

function Details() {
    const params = useParams();
    const complaint = GetData(`/complaints/${params.id}`)


    const [deletee, setDeletee] = useState(false)
    const deleteC = () => {
        setDeletee(true)
    }


    const navigate = useNavigate()
    const navigatee = () => {
        navigate('/complaints')
        window.location.reload()
    }
    const Delete = () => {
        setDeletee(false)
        deleteComplaint(params.id, navigatee)
    }

    const [commenter, setCommenter] = useState(false)

    const OpenCommente = () => {
        setCommenter(true)
    }
    
    const CancelCommante = () => {
        setCommenter(false)
    }
    
    const Commente = () => {
        alert("Commente succed !!!")
        setCommenter(false)
    }

    const lang = Lang()

  return (
        <div className={`${lang.title === "ar" && 'text-right'} mx-auto my-auto w-full mb-40 max-w-lg`}>
            <div className="relative bg-white rounded-lg shadow">
                <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-6 text-xl font-medium text-gray-900 dark:text-white"> </h3>

                    <div className="space-y-0">
                        <div>
                            <img className="rounded-lg w-full" src={`${ServerUrlPublic}/storage/images/complaints/${complaint?.data?.image}`} alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900"> {complaint?.data?.title} </h5>
                            <p className="mb-2 font-normal text-gray-700"> {complaint?.data?.property} </p>
                            <p className="mb-3 font-normal text-gray-700"> {complaint?.data?.desc} </p>
                        </div>
                        <div className='mb-10'>
                            <hr className="mb-4 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-0 lg:mb-4" />
                            <div className='mx-6'>
                                <h1 className='mb-4 text-xl font-bold tracking-tight text-gray-900' > {lang?.complaints?.comments} ( {complaint?.data?.comments?.length} ) </h1>
                                {complaint?.data?.comments?.map((item,key)=>(
                                    <div className='mt-2 mb-6 bg-gray-100 px-4 py-4 rounded-lg' key={key}>
                                        <div className=' flex items-center mb-2'>
                                            <div className="text-gray-800 flex items-center">
                                                <BiUser size={20} />
                                                <h1 className='ml-1'> {item.writer} </h1>
                                            </div>
                                            <h4 className='ml-2 text-gray-400'> / {item.date} </h4>
                                        </div>
                                        <p className='text-gray-800'> {item.text} </p>
                                    </div>
                                ))}
                            </div>
                            {commenter &&
                                <Comment Commente={Commente} CancelCommante={CancelCommante} />
                            }
                        </div>
                    </div>
                    
                    {!commenter &&
                        <div className="mt-6 flex justify-between space-x-4">
                            <GeneralBtn text={lang?.buttons?.comment} fun={OpenCommente} condition={false} />
                            <GeneralBtn text={lang?.buttons?.delete} fun={deleteC} condition={false} role="delete" />
                        </div>
                    }
                </div>
                {deletee && <LogOutModal title={lang.alert.complaint} yes={lang.alert.yes} no={lang.alert.no} fun={Delete} setLogout={setDeletee} />}
            </div>
        </div>
  )
}

export default Details