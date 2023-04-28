import React, { useState } from 'react'

function ComplaintItem({data, id, setComplaintBody}) {  
  return (
    <div key={id} className="mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <button onClick={()=> setComplaintBody(data)}>
            <img className="rounded-t-lg" src={data?.image} alt="" />
        </button>
        <div className="p-5">
            <button onClick={()=> setComplaintBody(data)}>
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {data?.title} </h5>
            </button>
            <p className="mb-2 font-normal text-gray-500 dark:text-gray-300"> {data?.property} </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {data?.desc} </p>
            
            <div className='mt-6'>
              <button onClick={()=> setComplaintBody(data)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
        </div>
    </div>
  )
}

export default ComplaintItem