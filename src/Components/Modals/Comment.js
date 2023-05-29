import React, { useState } from 'react'
import { Lang, ServerUrl } from '../Functions'
import { GeneralBtn } from '../Buttons'
import axios from 'axios'

function Comment({complaint, user, CancelCommante}) {
  const [text, setText] = useState('')
  const condition = text === ''

  const date = new Date()

  const comment = {
    "writer": user?.email,
    "complaint": complaint,
    "date": {
      "day": date.getDate(),
      "month": date.getMonth()+1,
      "year": date.getFullYear()
    },
    "text": text
  }

  const Commente = () => {
    axios.post(`${ServerUrl}/comments`, comment, {headers: {"Content-Type": "multipart/form-data"}})
      .then(res => {
        console.log(res.data);
        window.location.reload()
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className='pt-0'>
        <hr className=" mb-4 border-gray-300 sm:mx-auto dark:border-gray-600 lg:my-8 lg:mb-4" />
        <div className="px-6">
            <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900"> {Lang()?.complaints?.commentaire} </h5>

            <textarea 
                id="message" 
                rows="4" 
                onChange={e=> setText(e.target.value)}
                className=" outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500  dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500" 
                placeholder={Lang()?.complaints?.message}
            ></textarea>

            <div className="mt-4 flex justify-between space-x-4">
                <GeneralBtn text={Lang()?.buttons?.post} fun={Commente} condition={condition} />
                <GeneralBtn text={Lang()?.buttons?.cancel} fun={CancelCommante} condition={false} role="delete" />
            </div>
        </div>
    </div>
  )
}

export default Comment