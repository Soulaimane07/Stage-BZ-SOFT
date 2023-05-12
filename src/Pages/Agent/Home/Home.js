import React from 'react'
import { Link } from 'react-router-dom'
import {FiUsers} from 'react-icons/fi'
import {BiClipboard} from 'react-icons/bi'

import { LineChart, PieChart } from '../../../Components/Charts';
import Box from '../../../Components/Box';
import { GetUsers, Lang } from '../../../Components/Functions';

function Home({complaints, users}) {
  const articles = [
    {
      "icon":<BiClipboard />,
      "title": Lang()?.home.complaints,
      "text":`${Lang()?.home.complaints}: ${complaints?.length} | ${Lang()?.home.answers}: ${0}`,
      "link":"/complaints"
    },
    {
      "icon":<FiUsers />,
      "title": Lang()?.home.users,
      "text":`${Lang()?.home.users}: ${users?.length} | ${Lang()?.home.clients}: ${GetUsers(users)?.clients} | ${Lang()?.home.agents}: ${GetUsers(users)?.agents} | ${Lang()?.home.companies}: ${GetUsers(users)?.companies}`,
      "link":"/users"
    },
  ]

  const data = {
    labels: [Lang()?.months.january, Lang()?.months.february, Lang()?.months.march, Lang()?.months.april, Lang()?.months.may, Lang()?.months.june, Lang()?.months.july, Lang()?.months.august, Lang()?.months.september, Lang()?.months.october, Lang()?.months.november, Lang()?.months.december],
    datasets: [
      {
        label: Lang()?.home.createdC,
        data: [0, 10, 50, 80, 100, 100, 250, 220, 200, 200, 200, 210],
        borderColor: '#0bf186b1',
        backgroundColor: '#0bf186b1',
      },
      {
        label: Lang()?.home.answeredC,
        data: [0, 10, 40, 50, 90, 100, 220, 200, 180, 170, 200, 200],
        borderColor: '#F45050',
        backgroundColor: '#F45050',
      },
    ],
  };

  const Piedata = {
    labels: [Lang()?.home?.clients, Lang()?.home?.agents, Lang()?.home?.companies],
    datasets: [
      {
        label: '# of Votes',
        data: [GetUsers(users)?.clients, GetUsers(users)?.agents, GetUsers(users)?.companies],
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
    <div className={`${Lang()?.title === "ar" && "text-right"} max-w-screen-xl mx-auto p-4 pb-20`}>
      <h1 className="  text-2xl mt-4 lg:mt-0 font-extrabold text-slate-900 md:text-3xl lg:text-4xl"> {Lang()?.home.dashboard} </h1>
      
      <div className="mt-6 px-4 mx-auto max-w-screen-xl lg:mt-10 lg:px-0">
        <div className="grid gap-8 lg:grid-cols-2">
          {articles.map((item,key)=>(
            <Box data={item} key={key} read={Lang()?.home.read} type={Lang()?.title} />
          ))}
        </div>  
      </div>

      <div className="mt-6 px-4 mx-auto max-w-screen-xl lg:mt-10 lg:px-0">
        <div className="space-y-8 lg:flex lg:space-y-0 lg:space-x-8">
          <div  className="p-6 bg-white rounded-lg border lg:w-2/3 border-gray-200 shadow-md ">
            <Link to={"/complaints"} className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
              {Lang()?.home.complaints}
            </Link>
            <LineChart  data={data} />
          </div>
          <div  className="p-6 bg-white rounded-lg border lg:w-1/3 border-gray-200 shadow-md ">
            <Link to={'/users'} className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
              {Lang()?.home.users}
            </Link>
            <PieChart data={Piedata} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home