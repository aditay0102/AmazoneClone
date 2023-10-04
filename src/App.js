import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
     
      <Login/>
      
    </div>
  );
}

export default App;
