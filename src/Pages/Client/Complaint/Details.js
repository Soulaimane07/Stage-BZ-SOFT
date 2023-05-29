import React, { useState } from 'react'
import { GetData, Lang, ServerUrlPublic, deleteComplaint } from '../../../Components/Functions'
import Comment from '../../../Components/Modals/Comment'
import { GeneralBtn } from '../../../Components/Buttons'
import { LogOutModal } from '../../../Components/Modals'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import CommentDetail from './CommentDetail'

function Details({user}) {
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

    const lang = Lang()

    const comments = GetData(`/getComments/${params.id}`)

  return (
        <div className={`${lang.title === "ar" && 'text-right'} mx-auto my-auto w-full mb-40 max-w-lg`}>
            <div className="relative bg-white rounded-lg shadow">
                <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-6 text-xl font-medium text-gray-900 dark:text-white"> </h3>

                    <div className="space-y-0">
                        <div className='grid grid-cols-2 gap-2'>
                            {complaint?.data?.image?.map((item,key)=>(
                                <div key={key} className='rounded-lg w-full h-full overflow-hidden'>
                                    <img className=" h-full w-full" src={`${ServerUrlPublic}/storage/images/complaints/${item}`} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900"> {complaint?.data?.title} </h5>
                            <p className="mb-2 font-normal text-gray-700"> {complaint?.data?.property} </p>
                            <p className="mb-3 font-normal text-gray-700"> {complaint?.data?.desc} </p>
                        </div>
                        <div className='mb-10'>
                            <hr className="mb-4 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-0 lg:mb-4" />
                            <div className='mx-6'>
                                <h1 className='mb-4 text-xl font-bold tracking-tight text-gray-900' > {lang?.complaints?.comments} ( {comments?.data?.length} ) </h1>
                                {comments?.data?.map((item,key)=>(
                                    <div key={key}>
                                    <CommentDetail item={item} id={key} />
                                    </div>
                                ))}
                            </div>
                            {commenter &&
                                <Comment complaint={params.id} user={user} CancelCommante={CancelCommante} />
                            }
                        </div>
                    </div>
                    
                    {!commenter &&
                        <div className="mt-6 flex justify-between space-x-4">
                            <GeneralBtn text={lang?.buttons?.comment} fun={OpenCommente} condition={false} />
                            {comments.data.length === 0 && <GeneralBtn text={lang?.buttons?.delete} fun={deleteC} condition={false} role="delete" /> }
                        </div>
                    }
                </div>
                {deletee && <LogOutModal title={lang.alert.complaint} yes={lang.alert.yes} no={lang.alert.no} fun={Delete} setLogout={setDeletee} />}
            </div>
        </div>
  )
}

export default Details