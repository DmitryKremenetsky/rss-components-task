import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css';
import SearchBar from '../searchBar/searchBar';

const Navigation = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setPageTitle('Home');
        break;
      case '/about':
        setPageTitle('About');
        break;
      case '/form':
        setPageTitle('Form');
        break;
      default:
        setPageTitle('Error');
    }
  }, [location.pathname]);

  return (
    <header>
      <div>
        <h2>{pageTitle} page</h2>
      </div>
      <SearchBar />
      <div className="link-container">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About us
        </Link>
        <Link className="link" to="/form">
          From Page
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
