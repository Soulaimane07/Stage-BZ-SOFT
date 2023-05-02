import { PlansHeader } from '../../../../Components/Headers'
import { useNavigate } from 'react-router-dom'
import CreateCompany from '../../../../Components/Pages/CreateUser/CreateCompany'
import { Lang } from '../../../../Components/Functions'

function Companie({step, setStep}) {
  const navigate = useNavigate()
  const Login = (user) => {
    localStorage.setItem('Rec-user', JSON.stringify(user))
    navigate('/')
    window.location.reload()
  }

  return (
    <div>
        {PlansHeader(Lang()?.signup?.Ccompany, step, setStep)}
        
        <CreateCompany fun={Login} />
    </div>
  )
}

export default Companie