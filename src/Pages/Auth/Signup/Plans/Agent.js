import { PlansHeader } from '../../../../Components/Headers'
import { useNavigate } from 'react-router-dom'
import CreateAgent from '../../../../Components/Pages/CreateUser/CreateAgent'
import { Lang, SignupFun } from '../../../../Components/Functions'
import Alert from '../../../../Components/Alert'
import { useState } from 'react'

function Agent({step, setStep}) {
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  return (
    <div>
        {PlansHeader(Lang()?.signup?.Cagent, step, setStep)}
        {message && <Alert message={message} />}
        <CreateAgent fun={SignupFun} setMessage={setMessage} setLoading={setLoading} navigate={navigate} loading={loading} />
    </div>
  )
}

export default Agent