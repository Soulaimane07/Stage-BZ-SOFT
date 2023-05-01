import Agent from './Plans/Agent'
import Client from './Plans/Client'
import Companie from './Plans/Companie'
import './Signup.css'

function Register({step, setStep, plan}) {

  return (
    <div className='pb-40'>
        {plan === "client" && <Client step={step} setStep={setStep} />}
        {plan === "agent" && <Agent step={step} setStep={setStep} />}
        {plan === "company" && <Companie step={step} setStep={setStep} />}
    </div>
  )
}

export default Register