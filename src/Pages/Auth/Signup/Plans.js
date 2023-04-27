import { Link } from 'react-router-dom'
import { GeneralBtn } from '../../../Components/Buttons'

function Plans({setStep, plan, setPlan}) {
    const cond = plan === null

    const plans = [
        {
            "title":"Client",
            "val":"client"
        },
        {
            "title":"Agent",
            "val":"agent"
        },
        {
            "title":"Company",
            "val":"company"
        },
    ]

    const Next = () => {
        setStep(1)
    }

  return (
    <div>
        <h1 className='text-2xl text-center md:text-3xl lg:px-10'> Choose if you are an Agent or Client or Companie </h1>

        <div className='mt-6'>
            <div style={{marginBottom: 10}}>
                {plans.map((item,key)=>(
                    <button onClick={()=> setPlan(item.val)} key={key} className={`plan ${item.val === plan ? "bg-orange-500 text-white" : "bg-slate-200"}`}>
                        <h1> {item.title} </h1>
                    </button>
                ))}
            </div>
            <GeneralBtn text="Next" condition={cond} fun={Next} />


            <div style={{marginTop: 20, flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                <p> You have an account? </p>
                <Link to={"/"} className='text-orange-400 ml-2'> Login </Link>
            </div>
        </div> 
    </div>
  )
}

export default Plans