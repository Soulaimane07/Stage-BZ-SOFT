import { PlansHeader } from '../../../../Components/Headers'
import { useNavigate } from 'react-router-dom'
import CreateCompany from '../../../../Components/Pages/CreateUser/CreateCompany'
import { Lang, SignupFun } from '../../../../Components/Functions'
import { useState } from 'react'
import Alert from '../../../../Components/Alert'

function Companie({step, setStep}) {
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  return (
    <div>
        {PlansHeader(Lang()?.signup?.Ccompany, step, setStep)}
        {message && <Alert message={message} />}
        <CreateCompany fun={SignupFun} setMessage={setMessage} setLoading={setLoading} navigate={navigate} loading={loading} />
    </div>
  )
}

export default Companie