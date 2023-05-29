import { Lang, SignupFun } from '../../../../Components/Functions'
import { PlansHeader } from '../../../../Components/Headers'
import CreateClient from '../../../../Components/Pages/CreateUser/CreateClient'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Alert from '../../../../Components/Alert'

function Client({step, setStep}) {
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  
    return (
    <div>
        {PlansHeader(Lang()?.signup?.Cclient, step, setStep)}
        {message && <Alert message={message} /> }
        <CreateClient fun={SignupFun} loading={loading} setMessage={setMessage} setLoading={setLoading} navigate={navigate} />
    </div>
  )
}

export default Client