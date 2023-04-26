import './App.css';
import AuthStack from './Stacks/AuthStack';
import {BrowserRouter} from 'react-router-dom'
import LoggedStack from './Stacks/LoggedStack';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=> {
    let user = localStorage.getItem("Rec-user")
    setUser(JSON.parse(user))
    console.log(user);
  }, [])

  return (
    <BrowserRouter>
      {user 
        ? <LoggedStack user={user} />
        : <AuthStack />
      }
    </BrowserRouter>
  );
}

export default App;
