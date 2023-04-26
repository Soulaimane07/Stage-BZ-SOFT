import './App.css';
import AuthStack from './Stacks/AuthStack';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <AuthStack />
    </BrowserRouter>
  );
}

export default App;
