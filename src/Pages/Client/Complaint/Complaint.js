import React from 'react'
import { Link } from 'react-router-dom'

function Complaint() {
    const complaintsList = []

  return (
    <div className="max-w-screen-xl mx-auto p-4">
        <h1 class="text-2xl font-extrabold text-slate-900 md:text-3xl lg:text-4xl">Your Complaints ( {complaintsList?.length} )</h1>

        <div className='mt-10'>
            {complaintsList?.length > 0 ?
                <>
                
                </>
                :
                <div className="flex flex-col text-center">
                    <img style={{opacity: "60%"}} className='text-center items-center self-center object-center justify-center content-center justify-items-center flex flex-1' src={"./images/no-data.svg"} />
                    <h1 style={{opacity: "60%"}} className="text-slate-500 mt-10"> No complaints available </h1>
                    <Link to={'create'} class="focus:outline-none text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-orange-500 mt-8 w-60 mx-auto">
                        Create Complaint
                    </Link>
                </div>
            }
        </div>
    </div>
  )
}

export default Complaint