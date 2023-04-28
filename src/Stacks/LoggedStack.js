import React from 'react'
import ClientStack from './Logged/ClientStack';
import AgentStack from './Logged/AgentStack';
import CompanyStack from './Logged/CompanyStack';

function LoggedStack({user}) {
  return (
    <>
        {user.type === "client" && (<ClientStack user={user}/>)}
        {user.type === "agent" && (<AgentStack user={user} />)}
        {user.type === "company" && (<CompanyStack user={user} />)}
    </>
  )
}

export default LoggedStack