import React, { useState } from 'react'
import Image from '../Image'
import Plans from './Plans'
import Register from './Register'

function Signup() {
    const [step, setStep] = useState(0)
    const [plan, setPlan] = useState(null)

  return (
    <div className='Login grid mx-auto xl:gap-0 lg:grid-cols-12'>
        <Image />
        <div className='px-10 mx-auto mr-auto lg:col-span-5 lg:px-10'>
            <img className='logo' src='./images/logo.jpeg' alt='Logo' />

            {step === 0 && <Plans setStep={setStep} plan={plan} setPlan={setPlan} />}
            {step === 1 && <Register step={step} setStep={setStep} plan={plan} />}
        </div>
    </div>
  )
}

export default Signup