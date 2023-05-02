import React, {useState} from 'react'
import { GeneralBtn } from '../Buttons'
import { Lang } from '../Functions'
import Comment from './Comment'
import {BiUser} from 'react-icons/bi'

function ComplaintModal({data, setComplaintBody, setDeleteC}) {
    const deleteC = () => {
        setDeleteC(true)
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

    return(
        <div id="popup-modal" tabIndex="-1" className="fixed flex z-50 mx-auto overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative mx-auto my-auto w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={()=> setComplaintBody(null)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>

                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-6 text-xl font-medium text-gray-900 dark:text-white"> </h3>

                        <div className="space-y-0">
                            <div>
                                <img className="rounded-lg" src={data?.image} alt="" />
                            </div>
                            <div className="p-5">
                                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {data?.title} </h5>
                                <p className="mb-2 font-normal text-gray-500 dark:text-gray-300"> {data?.property} </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {data?.desc} </p>
                            </div>
                            <div className='mb-10'>
                                <hr className="mb-4 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-0 lg:mb-4" />
                                <div className='mx-6'>
                                    <h1 className='text-xl text-white' > {lang?.complaints?.comments} ( {data?.comments?.length} ) </h1>
                                    {data?.comments?.map((item,key)=>(
                                        <div className='mt-2 mb-6 bg-gray-800 px-4 py-4 rounded-lg' key={key}>
                                            <div className=' flex items-center mb-2'>
                                                <div className="text-gray-400 flex items-center">
                                                    <BiUser size={20} />
                                                    <h1 className='ml-1'> {item.writer} </h1>
                                                </div>
                                                <h4 className='ml-2 text-gray-600'> / {item.date} </h4>
                                            </div>
                                            <p className='text-gray-400'> {item.text} </p>
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
                </div>
            </div>
        </div>
    )
}

export default ComplaintModal