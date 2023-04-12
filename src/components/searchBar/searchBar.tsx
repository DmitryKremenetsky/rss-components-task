import React from 'react';
import './searchBar.css';

interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (newSearchTerm: string) => void;
  onSearchButtonClick: () => Promise<void>;
  loading: boolean;
}

const SearchBar = ({
  searchTerm,
  onSearchTermChange,
  onSearchButtonClick,
  loading,
}: SearchBarProps) => {
  return (
    <div className="search">
      <input
        className="search-term"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <button className="search-button" onClick={onSearchButtonClick} disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
    </div>
  );
};

export default SearchBar;
