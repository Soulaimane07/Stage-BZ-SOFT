import { useNavigate } from "react-router-dom"
import { GeneralBtn } from "./Buttons"
import { useState } from "react"

export const LogOutModal = ({Language, setLogout, fun}) => {
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.removeItem('Rec-user')
        navigate('/')
        window.location.reload()
    }

    return(
        <div id="popup-modal" tabIndex="-1" className="fixed flex z-50 mx-auto overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative mx-auto my-auto w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" onClick={()=> setLogout(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                        <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"> {Language?.complaint} </h3>
                        <button onClick={fun ? fun : Logout } data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            {Language?.yes}
                        </button>
                        <button onClick={()=> setLogout(false)} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            {Language?.no}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const UpdateUserModal = ({setUpdate, user}) => {
    const [email, setEmail] = useState(user?.email)
    const [fName, setFname] = useState(user?.fname)
    const [lName, setLname] = useState(user?.lname)
    const [phone, setPhone] = useState(user?.phone)
    const [pass, setPass] = useState(user?.pass)
    const [cname, setCname] = useState(user?.cname)

    let cond
    user?.type === "client" && (cond = (email === user?.email && fName === user?.fname && lName === user?.lname && pass === user?.pass) || (email === "" || fName === "" || lName === "" || pass?.length < 6))
    user?.type === "agent" && ( cond = (email === user?.email && fName === user?.fname && lName === user?.lname && phone === user?.phone && pass === user?.pass) || (email === "" || fName === "" || lName === "" || phone === "" || pass?.length < 6))
    user?.type === "company" && ( cond = (cname === user?.cname && email === user?.email && phone === user?.phone && pass === user?.pass) || (cname === "" || email === "" || phone === "" || pass?.length < 6))
  
    const data = {
        email: email,
        fname: fName,
        lname: lName,
        phone: phone,
        pass: pass,
        cname: cname,
    }

    console.log(data);

    return(
        <div id="popup-modal" tabIndex="-1" className="fixed flex z-50 mx-auto overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative mx-auto my-auto w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" onClick={()=> setUpdate(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>

                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white"> Update your profile </h3>
                        <div className="space-y-6">
                            {user?.cname &&
                            <div>
                                <label htmlFor="company name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Company Name</label>
                                <input onChange={(e)=> setCname(e.target.value)} defaultValue={user?.cname} type="text" name="company name" id="company name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            }
                            {user?.email &&
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input onChange={(e)=> setEmail(e.target.value)} defaultValue={user?.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            }
                            {user?.fname &&
                            <div>
                                <label htmlFor="first name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your First name</label>
                                <input onChange={(e)=> setFname(e.target.value)} defaultValue={user?.fname} type="tetx" name="first name" id="first name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            }
                            {user?.lname &&
                            <div>
                                <label htmlFor="last name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Last name</label>
                                <input onChange={(e)=> setLname(e.target.value)} defaultValue={user?.lname} type="text" name="last name" id="last name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            }
                            {user?.phone && 
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone number</label>
                                <input onChange={(e)=> setPhone(e.target.value)} defaultValue={user?.phone} type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            
                            }
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input onChange={(e)=> setPass(e.target.value)} defaultValue={user?.pass} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            
                            <GeneralBtn text="Update" condition={cond} modal={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export const ComplaintModal = ({Language, data, setComplaintBody, setDeleteC}) => {
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