import React, { useEffect, useState } from 'react';
import './card.css';
import useCharacters from './useCharacters';

interface CardProps {
  title: string;
  description: string;
}

const Card = ({}: CardProps) => {
  const characters = useCharacters();
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter(
        (character) =>
          character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          character.species.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCharacters(filtered);
    }
    localStorage.setItem('searchTerm', searchTerm);
  }, [characters, searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="search">
        <input
          className="search-term "
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="card-wrapper">
        {filteredCharacters.map((item) => (
          <div key={item.id} className="card-user">
            <div className="card">
              <img src={item.image} alt="" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p>{item.species}</p>
                <p>{item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
