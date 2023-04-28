import React, { useState } from 'react'
import NoData from '../../../Components/NoData'
import ComplaintItem from '../../../Components/ComplaintItem'
import { ComplaintModal, LogOutModal } from '../../../Components/Modals'

function Complaint(props) {
  const [complaintBody, setComplaintBody] = useState(null)
  const [deleteC, setDeleteC] = useState(false)

  const DeleteC = () => {
    alert("Deleted !!!!")
    setDeleteC(false)
    setComplaintBody(null)
  }

  return (
    <div className="max-w-screen-xl mx-auto mb-0 p-4 pb-0">
        <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl"> {props.title} ( {props.data?.length} )</h1>

        <div className='my-10'>
            {props.data?.length > 0 
              ?
                <div className='mb-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 '>
                  {props.data?.map((item,key)=>(
                    <ComplaintItem data={item} key={key} id={key} setComplaintBody={setComplaintBody} />
                  ))}

                  {complaintBody && <ComplaintModal data={complaintBody} setComplaintBody={setComplaintBody} setDeleteC={setDeleteC} />}
                  {(deleteC && complaintBody) && <LogOutModal text="Are you sure you want to Delete this complaint?" fun={DeleteC} setLogout={setDeleteC} />}
                </div>
              : <NoData stat="complaint" create="Complaint" />
            }
        </div>
    </div>
  )
}

export default Complaint