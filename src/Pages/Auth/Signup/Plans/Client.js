import { PlansHeader } from '../../../../Components/Headers'
import CreateClient from '../../../../Components/Pages/CreateUser/CreateClient'
import { useNavigate } from 'react-router-dom'

function Client({step, setStep}) {
  const navigate = useNavigate()
  const Login = (user) => {
    localStorage.setItem('Rec-user', JSON.stringify(user))
    navigate('/')
    window.location.reload()
  }
  
    return (
    <div>
        {PlansHeader("Create client account", step, setStep)}
        <CreateClient fun={Login} />
    </div>
  )
}

export default Client