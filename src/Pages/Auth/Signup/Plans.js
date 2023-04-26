import { Link } from 'react-router-dom'
import { GeneralBtn } from '../../../Components/Buttons'

function Plans({setStep, plan, setPlan}) {
    const cond = plan === null

    const plans = [
        {
            "title":"Agent",
            "val":"agent"
        },
        {
            "title":"Client",
            "val":"client"
        },
        {
            "title":"Companie",
            "val":"companie"
        },
    ]

    const Next = () => {
        setStep(1)
    }

  return (
    <div>
        <h1 style={{fontSize: 30, paddingRight: 40, paddingLeft: 40, textAlign: 'center'}}> Choose if you are an Agent or Client or Companie </h1>

        <div className='mt-6'>
            <div style={{marginBottom: 10}}>
                {plans.map((item,key)=>(
                    <button onClick={()=> setPlan(key)} key={key} className='plan' style={key === plan ? {backgroundColor: "orange", color: "white"} : {backgroundColor: "#E8EAE6"}}>
                        <h1> {item.title} </h1>
                    </button>
                ))}
            </div>

            {GeneralBtn("Next", cond, Next)}

            <div style={{marginTop: 20, flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                <p> You have an account? </p>
                <Link to={"/"} className='text-orange-400 ml-2'> Login </Link>
            </div>
        </div> 
    </div>
  )
}

export default Plans