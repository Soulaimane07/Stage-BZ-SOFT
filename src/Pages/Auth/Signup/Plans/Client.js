import axios from 'axios'
import { Lang, ServerUrl } from '../../../../Components/Functions'
import { PlansHeader } from '../../../../Components/Headers'
import CreateClient from '../../../../Components/Pages/CreateUser/CreateClient'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Alert from '../../../../Components/Alert'

function Client({step, setStep}) {
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
        {PlansHeader(Lang()?.signup?.Cclient, step, setStep)}
        {message && <Alert message={message} /> }
        <CreateClient fun={Login} loading={loading} />
    </div>
  )
}

export default Client