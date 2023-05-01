import React, {useState} from 'react'
import { GeneralBtn } from '../Buttons'

function ComplaintModal({Language, data, setComplaintBody, setDeleteC}) {
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
                            {commenter &&
                                <>
                                    <hr className="mt-8 mb-4 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8 lg:mb-4" />
                                    <div className="px-5 pt-5">
                                        <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white"> {Language?.complaints?.commentaire} </h5>

                                        <textarea id="message" rows="4" class=" outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder={Language?.complaints?.message}></textarea>

                                        <div className="mt-4 flex justify-between space-x-4">
                                            <GeneralBtn text={Language?.buttons?.post} fun={Commente} condition={false} />
                                            <GeneralBtn text={Language?.buttons?.cancel} fun={CancelCommante} condition={false} role="delete" />
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        
                        {!commenter &&
                            <div className="flex justify-between space-x-4">
                                <GeneralBtn text={Language?.buttons?.comment} fun={OpenCommente} condition={false} />
                                <GeneralBtn text={Language?.buttons?.delete} fun={deleteC} condition={false} role="delete" />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplaintModal