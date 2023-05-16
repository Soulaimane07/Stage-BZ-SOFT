import React from 'react'
import {BiUser} from 'react-icons/bi'

function CommentDetail({item, key}) {
  return (
    <div className='mt-2 mb-6 bg-gray-100 px-4 py-4 rounded-lg' key={key}>
        <div className=' flex items-center mb-2'>
            <div className="text-gray-800 flex items-center">
                <BiUser size={20} />
                <h1 className='ml-1'> {item.writer} </h1>
            </div>
            <h4 className='ml-2 text-gray-400'> / {item.date.day}-{item.date.month}-{item.date.year} </h4>
        </div>
        <p className='text-gray-800'> {item.text} </p>
    </div>
  )
}

export default CommentDetail