import React from 'react'
import NoData from '../../../Components/NoData'

function Users(props) {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
        <h1 class="text-2xl font-extrabold text-slate-900 md:text-3xl lg:text-4xl"> {props.title} ( {props.data?.length} )</h1>

        <div className='mt-10'>
            {props.data?.length > 0 ?
                <>
                
                </>
                : <NoData stat="users" create="User" />
            }
        </div>
    </div>
  )
}

export default Users