import NoData from '../../../Components/NoData'
import ComplaintItem from '../../../Components/ComplaintItem'
import { Lang } from '../../../Components/Functions'
import { Link } from 'react-router-dom'

function Complaint({data}) {
  const lang = Lang()

  console.log(data);

  return (
    <div className={`${lang.title === "ar" && 'text-right'} max-w-screen-xl mx-auto mb-0 p-4 pb-0`}>
        <div className={`${lang.title === "ar" && 'flex-row-reverse'} flex justify-between items-center mt-4`}>
          <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl"> 
            {lang.complaints.complaints} ( {data?.length} )
          </h1>
          {data?.length > 0 && 
            <Link to={'create'} className="focus:outline-none text-center text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-10 py-2.5 dark:focus:ring-orange-500">
                {lang?.Ccreate?.Ptitle}
            </Link>
          }
        </div>

        <div className='my-10'>
            {data?.length > 0 
              ?
                <div className='mb-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 '>
                  {data?.map((item,key)=>(
                    <ComplaintItem type={lang.title} Language={lang.complaints} data={item} key={key} id={key} />
                  ))}
                </div>
              : <NoData stat="complaint" create="Complaint" Language={lang.complaints.nodata} />
            }
        </div>
    </div>
  )
}

export default Complaint