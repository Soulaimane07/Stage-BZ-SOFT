import React, { useState } from 'react'
import NoData from '../../../Components/NoData'
import { Destroy, GetData, Lang, Update } from '../../../Components/Functions'
import { Link } from 'react-router-dom'

import {RiDeleteBinLine} from 'react-icons/ri'
import {HiOutlinePencilAlt} from 'react-icons/hi'
import { LogOutModal, PriorityModal } from '../../../Components/Modals'

function Priorities() {
  const lang = Lang()

    const data = GetData('/priorities').data

    const [openDelete, setOpenDelete] = useState(null)
    
    const closeDelete = () => {
        setOpenDelete(null)
        window.location.reload()
    }

    const [openUpdate, setOpenUpdate] = useState(null)


  return (
    <div className={`${lang.title === "ar" && "text-right"} max-w-screen-xl mx-auto p-4`}>
        <div className={`${lang.title === "ar" && 'flex-row-reverse'} flex justify-between items-center mt-4`}>
            <h1 className='text-2xl lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl'>
                {lang?.priorities.title} ( {data?.length} )
            </h1>
            {data?.length > 0 && 
                <Link to={'create'} className="focus:outline-none text-center text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-orange-500 w-40">
                    {lang?.CPriority?.title}
                </Link>
            }
        </div>

        <div className='mt-10'>
            {data?.length > 0 ?
                <>
                  <div className=" rounded-lg relative overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th scope="col" className="pl-6 py-3">
                                    id
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                    {lang?.table?.title}
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                    {lang?.table?.color}
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                    {lang?.table?.demo}
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                            {data?.map((item,key)=>(
                              <tr key={key} className="bg-white border-b text-gray-600">
                                  <td className="pl-6 py-4">
                                      {key+1}
                                  </td>
                                  <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                                      {item.title}
                                  </th>
                                  <td className="px-6 py-4">
                                      {item.color}
                                  </td>
                                  <td className="px-6 py-4">
                                    <div className=' rounded py-2 text-center' style={{backgroundColor: item.color}}>
                                        <p className='opacity-100 text-black'> {item.title} </p>
                                    </div>
                                  </td>
                                  <td className="px-0 py-4 flex justify-end">
                                    <button onClick={()=> setOpenUpdate(item)} type="button" className=" text-lg focus:outline-none text-center text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg py-2.5 dark:focus:ring-orange-500 px-4 mx-1">
                                        <HiOutlinePencilAlt />
                                    </button>
                                    <button onClick={()=> setOpenDelete(item?.id)} type="button" className=" text-lg focus:outline-none text-center text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg py-2.5 dark:focus:ring-orange-500 px-4 mx-1">
                                        <RiDeleteBinLine />
                                    </button>
                                  </td>
                              </tr>
                            ))}
                          </tbody>
                      </table>
                  </div>

                    {openDelete && 
                        <LogOutModal title={lang?.alert?.priority} yes={lang?.alert?.yes} no={lang?.alert?.no} setLogout={setOpenDelete} fun={()=> Destroy('/priorities', openDelete, closeDelete)} />
                    }
                    {openUpdate && 
                        <PriorityModal priority={openUpdate} setUpdate={setOpenUpdate} Update={Update} language={lang?.title} translation={lang?.update} />
                    }
                </>
                : <NoData Language={lang?.priorities.nodata} />
            }
        </div>
    </div>
  )
}

export default Priorities