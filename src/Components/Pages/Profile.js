import React, { useState } from 'react'
import { GeneralBtn } from '../Buttons'
import { LogOutModal, UpdateUserModal } from '../Modals'
import { Lang } from '../Functions'

function Profile({user}) {
    const [update, setUpdate] = useState(false)
    const [deleteM, setDeleteM] = useState(false)

    const UpdateOpen = () => {
        setUpdate(true)
    }
    const DeleteOpen = () => {
        setDeleteM(true)
    }
    const DeleteAccount = () => {
        alert("Deleted!!!")
    }

  const lang = Lang()

  return (
    <div className={`${lang.title === "ar" && 'text-right'} max-w-screen-xl mx-auto p-4`}>
        <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl">
            {lang?.profile?.title}
        </h1>

        <div className='mt-10 max-w-screen-xl mx-auto p-4'>
            <div className="px-8 md:px-40 lg:px-96">
                {user?.cname &&
                    <div className={`${lang.title === "ar" && "flex-row-reverse"} mb-6 flex justify-between`}>
                        <label htmlFor="cname" className="block mb-2 font-medium"> {lang?.profile.cname} </label>
                        <h1 className="font-bold"> {user?.cname} </h1>
                    </div>
                }
                {user?.email &&
                    <div className={`${lang.title === "ar" && "flex-row-reverse"} mb-6 flex justify-between`}>
                        <label htmlFor="email" className="block mb-2 font-medium"> {lang?.profile.email} </label>
                        <h1 className="font-bold"> {user?.email} </h1>
                    </div>
                }
                {user?.fname &&
                    <div className={`${lang.title === "ar" && "flex-row-reverse"} mb-6 flex justify-between`}>
                        <label htmlFor="first name" className="block mb-2 font-medium"> {lang?.profile.fname} </label>
                        <h1 className="font-bold">{user?.fname} </h1>
                    </div>
                }
                {user?.lname &&
                    <div className={`${lang.title === "ar" && "flex-row-reverse"} mb-6 flex justify-between`}>
                        <label htmlFor="last name" className="block mb-2 font-medium"> {lang?.profile.lname} </label>
                        <h1 className="font-bold">{user?.lname} </h1>
                    </div>
                }
                {user?.phone &&
                    <div className={`${lang.title === "ar" && "flex-row-reverse"} mb-6 flex justify-between`}>
                        <label htmlFor="phone" className="block mb-2 font-medium"> {lang?.profile.phone} </label>
                        <h1 className="font-bold">{user?.phone} </h1>
                    </div>
                }
                {user?.type &&
                    <div className={`${lang.title === "ar" && "flex-row-reverse"} mb-6 flex justify-between`}>
                        <label htmlFor="type" className="block mb-2 font-medium"> {lang?.profile.type} </label>
                        <h1 className="font-bold">{user?.type} </h1>
                    </div>
                }
                {/* {user?.pass &&
                    <div className={`${lang.title === "ar" && "flex-row-reverse"} mb-6 flex justify-between`}>
                        <label htmlFor="password" className="block mb-2 font-medium"> {lang?.profile.pass} </label>
                        <h1 className="font-bold">{user?.pass} </h1>
                    </div>
                } */}
                <div className={`${lang.title === "ar" && "flex-row-reverse"} mb-6 flex justify-between`}>
                    <label htmlFor="password" className="block mb-2 font-medium"> {lang?.profile.lang} </label>
                    <h1 className="font-bold"> {lang?.title1} </h1>
                </div>

                <div className="flex space-x-4">
                    <GeneralBtn text={lang?.profile.update} condition={false} fun={UpdateOpen} role={"update"} />
                    <GeneralBtn text={lang?.profile.delete} condition={false} fun={DeleteOpen} role={"delete"} />
                </div>
            </div>
        </div>

        {update && <UpdateUserModal user={user} setUpdate={setUpdate} language={lang?.title} />}
        {deleteM && <LogOutModal title={lang?.alert?.delete} yes={lang?.alert?.yes} no={lang?.alert?.no} setLogout={setDeleteM} fun={DeleteAccount} />}
    </div>
  )
}

export default Profile