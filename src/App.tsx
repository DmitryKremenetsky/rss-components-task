import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/home';
import AboutPage from './pages/AboutPage/About';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default App;
