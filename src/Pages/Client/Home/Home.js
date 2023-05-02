import React from 'react'
import Box from '../../../Components/Box'
import { BiClipboard } from 'react-icons/bi'
import { Lang } from '../../../Components/Functions'

function Home({data}) {
  const lang = Lang()

  const Complaints = {
    "icon":<BiClipboard />,
    "title": Lang()?.home.complaints,
    "text":`${Lang()?.home.complaints}: ${data?.length} | ${Lang()?.home.answers}: ${0}`,
    "link":"/complaints"
  }

  return (
    <div className={`${Lang()?.title === "ar" && "text-right"} max-w-screen-xl mx-auto p-4 pb-20`}>
        <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl">
          {lang?.home?.dashboard} 
        </h1>
      
        <div className="mt-6 px-4 mx-auto max-w-screen-xl lg:mt-10 lg:px-0">
            <div className="grid gap-8 lg:grid-cols-2">
                <Box data={Complaints} read={lang?.home?.read} type={lang?.title} />
            </div>
        </div>
    </div>
  )
}

export default Home