import {BsArrowLeft} from 'react-icons/bs'

export const GeneralBtn = ({text, condition, fun, role, modal, data}) => {
    return (
        <button 
            type="submit"
            disabled={condition} 
            onClick={()=> fun(data)}
            className={`text-white bg-[#E8EAE6] py-4 font-medium rounded-lg text-sm w-full sm:w-full px-10 lg:w-full text-center focus:ring-4 focus:outline-none ${condition ? `disabled ${modal && "dark:bg-gray-600"}` : role === "delete" ? "bg-red-600 hover:bg-red-300 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" : "bg-orange-500 hover:bg-orange-300 focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-700" }`}
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