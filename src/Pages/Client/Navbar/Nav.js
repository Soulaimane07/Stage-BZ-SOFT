import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogOutModal } from '../../../Components/Modals'
import {BiUser} from 'react-icons/bi'
import { Lang } from '../../../Components/Functions'

function Nav({user}) {
    const lang = Lang()

    const [nav, setNav] = useState(true)
    const [account, setAccount] = useState(true)

    const pages = [
        {
            "title": lang?.navbar?.dashboard,
            "link":"/"
        },
        {
            "title": lang?.navbar?.complaints,
            "link":"/complaints"
        },
        {
            "title": lang?.navbar?.profile,
            "link":"/profile"
        },
    ]

    const [logOut, setLogout] = useState(false)

  return (
    <>
    <div className="Navbar relative bg-gray-800 border-gray-400">
        <div className={`${lang.title === "ar" && 'flex-row-reverse'} max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}>
            <Link to="/" className="flex items-center">
                <img src="./images/logo.png" className="h-12 mr-3" alt="Logo" />
            </Link>

            <div className="flex items-center md:order-2">
                <button type="button" onClick={()=> account ? setAccount(false) : setAccount(true)} className="flex mr-3 text-3xl text-white bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <BiUser />
                </button>

                <div className={`${account && "hidden"} ${lang.title === "ar" ? "right-auto left-0 md:right-auto lg:right-auto md:left-0 lg:left-16" : "right-0 md:right-0 lg:right-16"} z-50 absolute top-16 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-600 md:top-16 lg:top-16 `} id="user-dropdown">
                    <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white"> {user?.fname || user?.cname} </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400"> {user?.email} </span>
                    </div>
                    <ul className={`${lang.title === 'ar' ? 'text-right' : 'text-left'} py-2`} aria-labelledby="user-menu-button">
                        <Link onClick={()=> setAccount(true)} to={"/profile"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            {lang?.navbar?.profile}
                        </Link>
                        <button onClick={()=> setLogout(true)} className={`${lang.title === 'ar' ? 'text-right' : 'text-left'} block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}>
                            {lang?.navbar?.signout}
                        </button>
                    </ul>
                </div>

                <button  onClick={()=> nav ? setNav(false) : setNav(true)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg md:hidden hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>

            <div className={`${nav && "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
                <ul className={`${lang.title === "ar" && 'text-right md:flex-row-reverse'} flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0`}>
                    {pages.map((item,key)=>(
                        <NavLink 
                            onClick={()=> setNav(true)} 
                            className={(navData) => navData.isActive ? `text-orange-400 hover:text-orange-400 ${lang.title === 'ar' && key === 0 ? 'md:ml-6' : 'md:ml-0'} block py-2 pl-3 pr-4 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 dark:text-orange-400` : `${lang.title === 'ar' && key === 0 ? 'md:ml-6' : 'md:ml-8'} block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 hover:text-orange-400 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`} 
                            key={key} 
                            to={item.link}
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>

    </div>
                    
    {logOut &&<LogOutModal title={lang?.alert?.signout} yes={lang?.alert?.yes} no={lang?.alert?.no} setLogout={setLogout} />}
    </>
  )
}

export default Nav