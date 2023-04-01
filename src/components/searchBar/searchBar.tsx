import React, { useState, useEffect } from 'react';
import './searchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>(() => {
    return localStorage.getItem('searchTerm') || '';
  });

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      <input className="search-term" type="text" value={searchTerm} onChange={handleChange} />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
