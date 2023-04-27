import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogOutModal } from '../../../Components/Modals'
import {BiUser} from 'react-icons/bi'

function Nav({user}) {
    const [nav, setNav] = useState(true)
    const [account, setAccount] = useState(true)

    const pages = [
        {
            "title":"Home",
            "link":"/"
        },
        {
            "title":"Complaints",
            "link":"/complaints"
        },
        {
            "title":"Profile",
            "link":"/profile"
        },
    ]

    const [logOut, setLogout] = useState(false)

  return (
    <>
    <div className="Navbar relative bg-orange-500 dark:bg-gray-800 border-gray-400">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
                <img src="./images/logo.png" className="h-12 mr-3" alt="Logo" />
            </Link>

            <div className="flex items-center md:order-2">
                <button type="button" onClick={()=> account ? setAccount(false) : setAccount(true)} className="flex p-2 mr-3 text-3xl text-white bg-orange-400 dark:bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <BiUser />
                </button>

                <div className={`${account && "hidden"} z-50 absolute top-16 right-16 my-4 text-base list-none bg-orange-500 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-600 md:top-16 md:right-0 lg:top-16 lg:right-16`} id="user-dropdown">
                    <div className="px-4 py-3">
                    <span className="block text-sm text-white"> {user?.fname} </span>
                    <span className="block text-sm text-gray-100 truncate dark:text-gray-400"> {user?.email} </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <Link onClick={()=> setAccount(true)} to={"/profile"} className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Profile
                        </Link>
                        <button onClick={()=> setLogout(true)} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Sign out
                        </button>
                    </ul>
                </div>

                <button  onClick={()=> nav ? setNav(false) : setNav(true)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg md:hidden hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>

            <div className={`${nav && "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1" id="mobile-menu-2`}>
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    {pages.map((item,key)=>(
                        <NavLink onClick={()=> setNav(true)} className={(navData) => navData.isActive ? "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-800 hover:text-white md:hover:bg-transparent md:hover:text-gray-800 md:p-0 md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 dark:text-orange-400" : 'block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-800 hover:text-white md:hover:bg-transparent md:hover:text-gray-800 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'} key={key} to={item.link}>
                            {item.title}
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>

    </div>
                    
    {logOut &&<LogOutModal text={"Are you sure you want to Log out?"} setLogout={setLogout} />}
    </>
  )
}

export default Nav