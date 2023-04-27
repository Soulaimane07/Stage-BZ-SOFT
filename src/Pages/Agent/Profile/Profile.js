import React from 'react'

function Profile({user}) {
  return (
    <div className='max-w-screen-xl mx-auto p-4'>
        <h1 class="text-2xl font-extrabold text-slate-900 md:text-3xl lg:text-4xl">
            Your Profile
        </h1>

        <div className='mt-10 max-w-screen-xl mx-auto p-4'>
            <div className="px-8 md:px-40 lg:px-80">
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 font-medium">Email Adress</label>
                    <input type="email" id="email" disabled value={user?.email} />
                </div>
                <div className="mb-6">
                    <label htmlFor="first name" className="block mb-2 font-medium">First Name</label>
                    <input type="text" id="first name" disabled value={user?.fname} />
                </div>
                <div className="mb-6">
                    <label htmlFor="last name" className="block mb-2 font-medium">Last Name</label>
                    <input type="text" id="last name" disabled value={user?.lname} />
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 font-medium"> Phone</label>
                    <input type="tel" id="phone" disabled value={user?.phone} />
                </div>
                <div className="mb-6">
                    <label htmlFor="type" className="block mb-2 font-medium">Account Type</label>
                    <input type="text" id="type" disabled value={user?.type} />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 font-medium">Password</label>
                    <input type="password" id="password" disabled value={user?.pass}  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile