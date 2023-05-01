import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {BiUser} from 'react-icons/bi'
import { LogOutModal } from '../../../Components/Modals'
import { Lang } from '../../../Components/Functions'

function Navbar({user}) {
    const [account, setAccount] = useState(true)
    const [logOut, setLogout] = useState(false)

    const pages = [
        {
            "title": Lang()?.navbar.dashboard,
            "link":"/"
        },
        {
            "title": Lang()?.navbar.complaints,
            "link":"/complaints"
        },
        {
            "title": Lang()?.navbar.users,
            "link":"/users"
        },
        {
            "title": Lang()?.navbar.profile,
            "link":"/profile"
        },
    ]

    const type = Lang()?.title

  return (
    <div className='Navbar relative bg-gray-800 border-gray-400'>
        <div className={`${type === "ar" && 'flex-row-reverse'} max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}>
            <Link to="/" className="flex items-center">
                <img src="./images/logo.png" className="h-12 mr-3" alt="Logo" />
            </Link>

            <div className="flex items-center md:order-2">
                <button type="button" onClick={()=> account ? setAccount(false) : setAccount(true)} className="flex mr-3 text-3xl text-white bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <BiUser />
                </button>

                <div className={`${account && "hidden"} ${type === "ar" ? "right-auto left-0 md:right-auto lg:right-auto md:left-0 lg:left-16" : "right-0 md:right-0 lg:right-16"} z-50 absolute top-16 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-600 md:top-16 lg:top-16 `} id="user-dropdown">
                    <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white"> {user?.fname} </span>
                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400"> {user?.email} </span>
                    </div>
                    <ul className={`${type === 'ar' ? 'text-right' : 'text-left'} py-2`} aria-labelledby="user-menu-button">
                        <Link onClick={()=> setAccount(true)} to={"/profile"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            {Lang()?.navbar.profile}
                        </Link>
                        <button onClick={()=> setLogout(true)} className={`${type === 'ar' ? 'text-right' : 'text-left'} block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}>
                            {Lang()?.navbar.signout}
                        </button>
                    </ul>
                </div>
            </div>
        </div>

        <nav className="bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className={`${type === "ar" ? ("flex-row-reverse") : 'space-x-8'} w-full flex  font-medium  text-sm`}>
                        {pages.map((item,key)=>(
                            <div>
                            <NavLink 
                                key={key}
                                to={item.link} 
                                activateclassname="active"
                                className={(navData) => navData.isActive ? `text-orange-400 ${type === 'ar' && key === 0 ? 'mr-0' : 'mr-8'}` : `${type === 'ar' && key === 0 ? 'mr-0' : 'mr-8'} text-white hover:text-orange-400`}
                            >
                                {item.title}
                            </NavLink>
                            </div>
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