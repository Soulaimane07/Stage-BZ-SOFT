import {BsArrowLeft} from 'react-icons/bs'

export const GeneralBtn = (text, condition, fun) => {
    return (
        <button 
            type="submit"
            disabled={condition} 
            onClick={fun}
            className={`text-white bg-[#E8EAE6] py-4 font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:w-full text-center ${condition ? 'disabled' : 'bg-orange-300 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-700'}`}
        > 
            {text} 
        </button>
    )
}


export const Goback = (step, setStep) => {
    return (
        <button className='backBtn h-full' onClick={()=> setStep(step-1)}> <BsArrowLeft /></button> 
    )
}