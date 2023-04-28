import React from 'react'
import { Link } from 'react-router-dom'
import {FiUsers} from 'react-icons/fi'
import {BiClipboard} from 'react-icons/bi'

import { LineChart, PieChart, Months } from '../../../Components/Charts';

function Home({complaints, users}) {
  const articles = [
    {
      "icon":<BiClipboard />,
      "title":"Complaints",
      "text":`${complaints?.length} complaints | 4 Answers`,
      "link":"/complaints"
    },
    {
      "icon":<FiUsers />,
      "title":"Users",
      "text":`${users?.length} users | 4 clients | 2 agents | 1 company`,
      "link":"/users"
    },
  ]

  const data = {
    labels: Months,
    datasets: [
      {
        label: "Created Complaints",
        data: [0, 10, 50, 80, 100, 100, 250, 220, 200, 200, 200, 210],
        borderColor: '#0bf186b1',
        backgroundColor: '#0bf186b1',
      },
      {
        label: "Answerd Complaints",
        data: [0, 10, 40, 50, 90, 100, 220, 200, 180, 170, 200, 200],
        borderColor: '#F45050',
        backgroundColor: '#F45050',
      },
    ],
  };

  const Piedata = {
    labels: ['Clients', 'Agents', 'Companies'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 4, 6],
        backgroundColor: [
          '#0bf18649',
          '#f92e2e2f',
          '#f97c222e',
        ],
        borderColor: [
          '#03f685',
          '#f92e2e',
          '#fc7617',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='max-w-screen-xl mx-auto p-4 pb-20'>
      <h1 className="text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl"> Dashboard </h1>
      
      <div className="mt-6 px-4 mx-auto max-w-screen-xl lg:mt-10 lg:px-0">
        <div className="grid gap-8 lg:grid-cols-2">
          {articles.map((item,key)=>(
            <article key={key} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-700">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link className='flex items-center' to={item.link}>
                  {item.icon}
                  <span className='ml-3'> {item.title} </span>
                </Link>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                {item.text}
              </p>
              <Link to={item.link} className="float-right inline-flex text-gray-500 items-center font-medium dark:text-gray-400 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link>
            </article>  
          ))}
        </div>  
      </div>

      <div className="mt-6 px-4 mx-auto max-w-screen-xl lg:mt-10 lg:px-0">
        <div className="space-y-8 lg:flex lg:space-y-0 lg:space-x-8">
          <div  className="p-6 bg-white rounded-lg border lg:w-2/3 border-gray-200 shadow-md ">
            <Link to={"/complaints"} className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
              Complaints
            </Link>
            <LineChart  data={data} />
          </div>
          <div  className="p-6 bg-white rounded-lg border lg:w-1/3 border-gray-200 shadow-md ">
            <Link to={'/users'} className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
              Users
            </Link>
            <PieChart data={Piedata} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home