import React, { useState } from 'react'
import { AffectComplaint, Lang, SearchFun } from '../../Functions'
import { GeneralBtn } from '../../Buttons'
import Search from '../../Search'

function Affecte({complaint, close}) {
    const [searchText, setSearchText] = useState("")
    const users = SearchFun(searchText)

    const [list, setList] = useState([])
    let condition = list.length === 0

    const selectUser = (id) => {
        let element = list.find(item => item === id)
        element 
            ? setList(list.filter(item => item !== id))
            : setList((pervList)=> [...pervList, id])
    }

    const data = {"list": list, "complaint": Number(complaint)}

    const lang = Lang()

    return (
    <div id="popup-modal" tabIndex="-1" className="fixed flex z-50 mx-auto overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative mx-auto my-auto w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" onClick={()=> close(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>

                <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white"> {lang?.affect?.title} </h3>
                    <div className="space-y-6">
                        <Search setSearchText={setSearchText} text={lang?.affect?.search} />

                        <div className='mx-auto w-80'>
                            {users?.map((user,key)=>(
                                user?.type !== "agent" &&
                                <div onClick={()=> selectUser(user?.id)} key={key} className='flex justify-start flex-row text-white mt-6'>
                                    <input checked={list.find(item => item === user?.id)} type='checkBox' className='w-5 mr-4 text-orange-600 bg-orange-600' />
                                    <p> {user.email} </p>
                                </div>
                            ))}
                        </div>

                        <GeneralBtn text={lang?.affect?.affect} condition={condition} fun={()=> AffectComplaint(complaint, data, close)} data={list} modal={true} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Affecte