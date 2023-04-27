import { PlansHeader } from '../../../../Components/Headers'
import { useNavigate } from 'react-router-dom'
import CreateAgent from '../../../../Components/Pages/CreateUser/CreateAgent'

function Agent({step, setStep}) {
  const navigate = useNavigate()
  const Login = (user) => {
    localStorage.setItem('Rec-user', JSON.stringify(user))
    navigate('/')
    window.location.reload()
  }

  return (
    <div>
        {PlansHeader("Create agent account", step, setStep)}
        <CreateAgent fun={Login} />
    </div>
  )
}

export default Agent