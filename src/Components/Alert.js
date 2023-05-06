import React from 'react'
import { IoIosAlert } from 'react-icons/io'

function Alert({message}) {
  return (
    <div class="flex items-center justify-center p-4 mb-4 text-sm text-red-500 rounded-lg" role="alert">
        <div className=' text-xl'> <IoIosAlert /> </div>
        <div class="ml-2 font-medium text-l">
            {message} 
        </div>
    </div>
  )
}

export default Alert