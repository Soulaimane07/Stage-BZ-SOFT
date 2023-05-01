import React from 'react'
import NoData from '../../../Components/NoData'
import { Lang } from '../../../Components/Functions'

function Users(props) {
  const type = Lang()?.title

  return (
    <div className={`${type === "ar" && "text-right"} max-w-screen-xl mx-auto p-4`}>
        <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl">
          {Lang()?.users.users} ( {props.data?.length} )
        </h1>

        <div className='mt-10'>
            {props.data?.length > 0 ?
                <>
                
                </>
                : <NoData Language={Lang()?.users.nodata} stat="users" create="User" />
            }
        </div>
    </div>
  )
}

export default Users