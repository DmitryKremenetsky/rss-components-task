import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/home';
import AboutPage from './pages/AboutPage/About';
import PageError from './pages/PageError/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/error" element={<PageError />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
