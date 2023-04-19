import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/components/Login';
import Stage from './pages/components/Stage';
import LandingPage from './pages/signup/LandingPage';

function App() {
  return (
    <div className="App">
        <Stage/>
    </div>
  );
}

export default App;
