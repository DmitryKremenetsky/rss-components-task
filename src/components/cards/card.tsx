import React, { useEffect, useState } from 'react';
import './card.css';
import useCharacters from './useCharacters';

interface CardProps {
  searchTerm: string;
}

const Card = ({ searchTerm }: CardProps) => {
  const characters = useCharacters();
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  useEffect(() => {
    setFilteredCharacters(
      characters.filter((item) => item.name.toLowerCase().includes(searchTerm?.toLowerCase()))
    );
  }, [characters, searchTerm]);

  return (
    <div className="card-wrapper">
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
