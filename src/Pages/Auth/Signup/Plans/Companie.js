import { PlansHeader } from '../../../../Components/Headers'
import { useNavigate } from 'react-router-dom'
import CreateCompany from '../../../../Components/Pages/CreateUser/CreateCompany'

function Companie({step, setStep}) {
  const navigate = useNavigate()
  const Login = (user) => {
    localStorage.setItem('Rec-user', JSON.stringify(user))
    navigate('/')
    window.location.reload()
  }

  return (
    <div>
        {PlansHeader("Create company account", step, setStep)}
        
        <CreateCompany fun={Login} />
    </div>
  )
}

export default Companie