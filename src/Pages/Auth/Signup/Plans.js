import { Link } from 'react-router-dom'
import { GeneralBtn } from '../../../Components/Buttons'
import { Lang } from '../../../Components/Functions'

function Plans({setStep, plan, setPlan}) {
    const lang = Lang()

    const cond = plan === null

    const plans = [
        {
            "title": lang?.signup?.client,
            "val":"client"
        },
        {
            "title":lang?.signup?.agent,
            "val":"agent"
        },
        {
            "title":lang?.signup?.company,
            "val":"company"
        },
    ]

    const Next = () => {
        setStep(1)
    }


  return (
    <div>
        <h1 className='text-2xl text-center md:text-3xl lg:px-8'> 
            {lang?.signup?.title} 
        </h1>

        <div className='mt-6'>
            <div style={{marginBottom: 10}}>
                {plans.map((item,key)=>(
                    <button onClick={()=> setPlan(item.val)} key={key} className={`plan ${item.val === plan ? "bg-orange-500 text-white" : "bg-slate-200"}`}>
                        <h1 className={lang?.title === "ar" ? 'text-right' : ''}> {item.title} </h1>
                    </button>
                ))}
            </div>

            <GeneralBtn text={lang?.signup?.next} condition={cond} fun={Next} />


            <div className={`${lang?.title === "ar" && 'flex-row-reverse'} mt-8 flex items-center`}>
                <p> {lang?.signup?.account} </p>
                <Link to={"/"} className='text-orange-400 ml-2'> {lang?.login?.login} </Link>
            </div>
        </div> 
    </div>
  )
}

export default Plans