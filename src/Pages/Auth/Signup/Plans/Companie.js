import { PlansHeader } from '../../../../Components/Headers'
import { useNavigate } from 'react-router-dom'
import CreateCompany from '../../../../Components/Pages/CreateUser/CreateCompany'
import { Lang, ServerUrl } from '../../../../Components/Functions'
import { useState } from 'react'
import axios from 'axios'
import Alert from '../../../../Components/Alert'

function Companie({step, setStep}) {
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const Login = (user) => {
    setMessage(null)
    setLoading(true)

    axios.post(`${ServerUrl}/users`, user)
      .then(res=> {
        console.log(res);
        localStorage.setItem('Rec-user', JSON.stringify(res.data))
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
        {PlansHeader(Lang()?.signup?.Ccompany, step, setStep)}
        {message && <Alert message={message} />}
        <CreateCompany fun={Login} loading={loading} />
    </div>
  )
}

export default Companie