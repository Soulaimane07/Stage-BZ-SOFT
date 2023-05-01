import React from 'react'
import Box from '../../../Components/Box'
import { BiClipboard } from 'react-icons/bi'

function Home({data}) {
    const Complaints = {
        "icon":<BiClipboard />,
        "title":"Complaints",
        "text":`${data?.length} complaints | 0 Answers`,
        "link":"/complaints"
    }

  return (
    <div className='max-w-screen-xl mx-auto p-4 pb-20'>
        <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl"> Dashboard </h1>
      
        <div className="mt-6 px-4 mx-auto max-w-screen-xl lg:mt-10 lg:px-0">
            <div className="grid gap-8 lg:grid-cols-2">
                <Box data={Complaints} />
            </div>
        </div>
    </div>
  )
}

export default Home