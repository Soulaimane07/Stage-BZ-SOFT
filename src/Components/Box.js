import React from 'react'
import { Link } from 'react-router-dom'

function Box({data, key, read, type}) {
  return (
    <article key={key} className="p-6 pb-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-700">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Link className={`${type === 'ar' && 'flex-row-reverse'} flex items-center`} to={data.link}>
                {data.icon}
                <span className={`${type === 'ar' && 'mr-2'} ml-3`}> {data.title} </span>
            </Link>
        </h2>
        
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
            {data.text}
        </p>
        
        <Link to={data.link} className={`float-right ${type === "ar" && "float-left flex-row-reverse"} flex text-gray-500 items-center font-medium dark:text-gray-400 hover:underline`}>
            {read}
            {type === "ar"
                ?   <svg className="ml-2 w-4 h-4 mr-2 fill-gray-400" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
                :   <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            }
        </Link>
    </article>
  )
}

export default Box