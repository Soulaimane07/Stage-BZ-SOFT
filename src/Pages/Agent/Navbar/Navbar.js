import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {BiUser} from 'react-icons/bi'
import { LogOutModal } from '../../../Components/Modals'

function Navbar({user}) {
    const [account, setAccount] = useState(true)
    const [logOut, setLogout] = useState(false)

    const pages = [
        {
            "title":"Dashboard",
            "link":"/"
        },
        {
            "title":"Complaints",
            "link":"/complaints"
        },
        {
            "title":"Users",
            "link":"/users"
        },
        {
            "title":"Profile",
            "link":"/profile"
        },
    ]

  return (
    <div className='Navbar relative bg-gray-800 border-gray-400'>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
                <img src="./images/logo.png" className="h-12 mr-3" alt="Logo" />
            </Link>

            <div className="flex items-center md:order-2">
                <button type="button" onClick={()=> account ? setAccount(false) : setAccount(true)} className="flex mr-3 text-3xl text-white bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <BiUser />
                </button>

                <div className={`${account && "hidden"} z-50 absolute top-16 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-600 md:top-16 md:right-0 lg:top-16 lg:right-16`} id="user-dropdown">
                    <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white"> {user?.fname} </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400"> {user?.email} </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <Link onClick={()=> setAccount(true)} to={"/profile"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Profile
                        </Link>
                        <button onClick={()=> setLogout(true)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Sign out
                        </button>
                    </ul>
                </div>
            </div>
        </div>

        <nav className="bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                        {pages.map((item,key)=>(
                            <NavLink 
                                key={key}
                                to={item.link} 
                                activateclassname="active"
                                className={(navData) => navData.isActive ? "block text-orange-400" : 'block text-white hover:text-orange-400'}
                            >
                                {item.title}
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

        {logOut &&<LogOutModal text="Are you sure you want to Log out?" setLogout={setLogout} />}
    </div>
  )
}

export default Navbar