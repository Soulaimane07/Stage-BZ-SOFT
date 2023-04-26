import Agent from './Plans/Agent'
import Client from './Plans/Client'
import Companie from './Plans/Companie'
import './Signup.css'

function Register({step, setStep, plan}) {

  return (
    <div>
        {plan === "agent" && <Agent step={step} setStep={setStep} />}
        {plan === "client" && <Client step={step} setStep={setStep} />}
        {plan === "company" && <Companie step={step} setStep={setStep} />}
    </div>
  )
}

export default Register