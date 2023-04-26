import Client from './Plans/Client'
import {BsArrowLeft} from 'react-icons/bs'
import './Signup.css'

function Register({step, setStep, plan}) {

  return (
    <div className='mt-6'>
        <button className='backBtn' onClick={()=> setStep(step-1)}> <BsArrowLeft /></button> 
        
        {plan === 1 && <Client />}
    </div>
  )
}

export default Register