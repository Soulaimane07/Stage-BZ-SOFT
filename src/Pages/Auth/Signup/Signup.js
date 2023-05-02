import React, { useState } from 'react'
import Image from '../Image'
import Plans from './Plans'
import Register from './Register'
import { Lang } from '../../../Components/Functions'

function Signup() {
    const [step, setStep] = useState(0)
    const [plan, setPlan] = useState(null)

  return (
    <div className={`${Lang()?.title === "ar" && "text-right"} Login grid mx-auto xl:gap-0 lg:grid-cols-12`}>
        <Image />
        <div className='px-10 mx-auto mr-auto md:px-40 lg:col-span-4 lg:px-10 w-full'>
            <img className='logo' src='./images/logo.jpeg' alt='Logo' />

            {step === 0 && <Plans setStep={setStep} plan={plan} setPlan={setPlan} />}
            {step === 1 && <Register step={step} setStep={setStep} plan={plan} />}
        </div>
    </div>
  )
}

export default Signup