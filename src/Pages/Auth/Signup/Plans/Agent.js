import { PlansHeader } from '../../../../Components/Headers'
import { useNavigate } from 'react-router-dom'
import CreateAgent from '../../../../Components/Pages/CreateUser/CreateAgent'
import { Lang, ServerUrl } from '../../../../Components/Functions'
import Alert from '../../../../Components/Alert'
import axios from 'axios'
import { useState } from 'react'

function Agent({step, setStep}) {
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const Login = (user) => {
    setMessage(null)
    setLoading(true)

    axios.post(`${ServerUrl}/users`, user)
      .then(res=> {
        console.log(res);
        localStorage.setItem('Rec-user', JSON.stringify(user))
        setLoading(false)
        navigate('/')
        window.location.reload()
      })
      .catch(err=> {
        setLoading(false)
        console.log(err);
        setMessage(err.response.data.message)
      })
  }

  return (
    <div>
        {PlansHeader(Lang()?.signup?.Cagent, step, setStep)}
        {message && <Alert message={message} />}
        <CreateAgent fun={Login} loading={loading} />
    </div>
  )
}

export default Agent