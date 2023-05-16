import { Link } from "react-router-dom"
import { ServerUrlPublic } from "./Functions"

function ComplaintItem({type, Language, data, id}) {  
  return (
    <div key={id} className="mb-10 mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`${data?.id}`}>
            <img className="rounded-t-lg" src={`${ServerUrlPublic}/storage/images/complaints/${data?.image}`} alt="" />
        </Link>
        <div className="p-5">
            <Link to={`${data?.id}`}>
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {data?.title} </h5>
            </Link>
            <p className="mb-2 font-normal text-gray-500 dark:text-gray-300"> {data?.property} </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data?.desc.length > 100 ?
                `${data?.desc.substring(0, 100)}...` : data?.desc
              }  
            </p>
            
            <div className='mt-6 bg-orange-300 w-full'>
              <Link to={`${data?.id}`} className={` mb-6 ${type === "ar" ? "float-right flex-row-reverse" : "float-left"} inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800`}>
                  {Language?.read}
                  {type === "ar"
                      ?   <svg className="ml-2 w-4 h-4 mr-2 fill-gray-100" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
                      :   <svg className="ml-2 w-4 h-4 fill-gray-100" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  }
              </Link>
            </div>
        </div>
    </div>
  )
}

export default ComplaintItem