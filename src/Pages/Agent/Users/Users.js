import React, { useState } from 'react'
import NoData from '../../../Components/NoData'
import { Lang, UpdateUser, deleteUser } from '../../../Components/Functions'
import { Link } from 'react-router-dom'

import {RiDeleteBinLine} from 'react-icons/ri'
import {HiOutlinePencilAlt} from 'react-icons/hi'
import { LogOutModal, UpdateUserModal } from '../../../Components/Modals'

function Users(props) {
    const lang = Lang()

    const data = props.data

    const [openDelete, setOpenDelete] = useState(null)
    
    const closeDelete = () => {
        setOpenDelete(null)
        window.location.reload()
    }

    const deleteFun = () => {
        deleteUser(openDelete, closeDelete)
    }


    const [openUpdate, setOpenUpdate] = useState(null)

    const Update = (data, lang) => {
        // localStorage.setItem('Rec-user', JSON.stringify(data))
        // localStorage.setItem('Rec-lang', JSON.stringify(lang))
        // window.location.reload()
        // alert(JSON.stringify(data))
        UpdateUser(openUpdate?.id, data)
    }

    
  return (
    <div className={`${lang.title === "ar" && "text-right"} max-w-screen-xl mx-auto p-4`}>
        <div className={`${lang.title === "ar" && 'flex-row-reverse'} flex justify-between items-center mt-4`}>
            <h1 className='text-2xl lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl'>
                {lang?.users.users} ( {data?.length} )
            </h1>
            {data?.length > 0 && 
                <Link to={'create'} className="focus:outline-none text-center text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-orange-500 w-40">
                    {lang?.Ccreate?.createUser}
                </Link>
            }
        </div>

        <div className='mt-10'>
            {data?.length > 0 ?
                <>
                  <div class=" rounded-lg relative overflow-x-auto">
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th scope="col" class="pl-6 py-3">
                                    id
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    {lang?.table?.email}
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    {lang?.table?.fname}
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    {lang?.table?.lname}
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    {lang?.table?.phone}
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    {lang?.table?.type}
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                            {data?.map((item,key)=>(
                              <tr key={key} class="bg-white border-b text-gray-600">
                                  <td class="pl-6 py-4">
                                      {key+1}
                                  </td>
                                  <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                                      {item.email}
                                  </th>
                                  <td class="px-6 py-4">
                                      {item.fname}
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.lname}
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.phone}
                                  </td>
                                  <td class="px-6 py-4">
                                      {item.type}
                                  </td>
                                  <td class="px-0 py-4 flex justify-end">
                                    <button onClick={()=> setOpenUpdate(item)} type="button" class=" text-lg focus:outline-none text-center text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg py-2.5 dark:focus:ring-orange-500 px-4 mx-1">
                                        <HiOutlinePencilAlt />
                                    </button>
                                    <button onClick={()=> setOpenDelete(item?.id)} type="button" class=" text-lg focus:outline-none text-center text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg py-2.5 dark:focus:ring-orange-500 px-4 mx-1">
                                        <RiDeleteBinLine />
                                    </button>
                                  </td>
                              </tr>
                            ))}
                          </tbody>
                      </table>
                  </div>

                    {openDelete && 
                        <LogOutModal title={lang?.alert?.user} yes={lang?.alert?.yes} no={lang?.alert?.no} setLogout={setOpenDelete} fun={deleteFun} />
                    }
                    {openUpdate && 
                        <UpdateUserModal user={openUpdate} setUpdate={setOpenUpdate} Update={Update} language={lang?.title} langField={false} translation={lang?.update} />
                    }
                </>
                : <NoData Language={lang?.users.nodata} stat="users" create="User" />
            }
        </div>
    </div>
  )
}

export default Users