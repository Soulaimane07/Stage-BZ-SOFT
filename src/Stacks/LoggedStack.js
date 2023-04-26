import React from 'react'
import ClientStack from './Logged/ClientStack';

function LoggedStack({user}) {
  return (
    <>
        {user.type === "client" && (<ClientStack />)},
        {user.type === "agent" && ("agentStack")}
        {user.type === "company" && ("CompanyStack")}
    </>
  )
}

export default LoggedStack