import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage/home';
import AboutPage from './pages/AboutPage/About';
import PageError from './pages/PageError/PageNotFound';
import FormPage from './pages/FormPage/UncontrolledForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/404" element={<PageError />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
