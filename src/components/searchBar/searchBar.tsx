import React, { useState } from 'react';
import './searchBar.css';
import Card from '../cards/card';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>(() => {
    return localStorage.getItem('searchTerm') || '';
  });

  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  return (
    <div className="search">
      <input className="search-term" type="text" value={searchTerm} onChange={handleChange} />
      <button className="search-btn" onClick={handleSearchClick}>
        Search
      </button>
      {isSearchClicked && <Card searchTerm={searchTerm} />}
    </div>
  );
};

export default SearchBar;
