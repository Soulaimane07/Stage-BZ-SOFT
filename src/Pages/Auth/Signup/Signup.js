import React, { useState } from 'react'
import Image from '../Image'
import Plans from './Plans'
import Register from './Register'
import { Lang } from '../../../Components/Functions'
import LanguageBox from '../../../Components/LanguageBox'

function Signup() {
    const [step, setStep] = useState(0)
    const [plan, setPlan] = useState(null)

  return (
    <div className={`${Lang()?.title === "ar" && "text-right"} Login flex flex-row`}>
        <div className='w-full'>
          <Image />
        </div>
        <div className='w-1/2 px-8 py-8'>
            <img className='logo' src='./images/logo.jpeg' alt='Logo' />

            {step === 0 && <Plans setStep={setStep} plan={plan} setPlan={setPlan} />}
            {step === 1 && <Register step={step} setStep={setStep} plan={plan} />}

            <LanguageBox />
        </div>
    </div>
  )
}

export default Signup