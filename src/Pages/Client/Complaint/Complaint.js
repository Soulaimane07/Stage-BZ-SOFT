import React, { useState } from 'react'
import NoData from '../../../Components/NoData'
import ComplaintItem from '../../../Components/ComplaintItem'
import {  LogOutModal } from '../../../Components/Modals'
import { Lang } from '../../../Components/Functions'
import ComplaintModal from '../../../Components/Modals/ComplaintModal'

function Complaint({data}) {
  const [complaintBody, setComplaintBody] = useState(null)
  const [deleteC, setDeleteC] = useState(false)

  const DeleteC = () => {
    alert("Deleted !!!!")
    setDeleteC(false)
    setComplaintBody(null)
  }
  
  const type = Lang()?.title

  return (
    <div className={`${type === "ar" && 'text-right'} max-w-screen-xl mx-auto mb-0 p-4 pb-0`}>
        <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl"> 
          {Lang()?.complaints.complaints} ( {data?.length} )
        </h1>

        <div className='my-10'>
            {data?.length > 0 
              ?
                <div className='mb-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 '>
                  {data?.map((item,key)=>(
                    <ComplaintItem Language={Lang()?.complaints} data={item} key={key} id={key} setComplaintBody={setComplaintBody} />
                  ))}

                  {complaintBody && <ComplaintModal Language={Lang()} data={Lang()} setComplaintBody={setComplaintBody} setDeleteC={setDeleteC} />}
                  {(deleteC && complaintBody) && <LogOutModal Language={Lang()?.alert} fun={DeleteC} setLogout={setDeleteC} />}
                </div>
              : <NoData stat="complaint" create="Complaint" Language={Lang()?.complaints.nodata} />
            }
        </div>
    </div>
  )
}

export default Complaint