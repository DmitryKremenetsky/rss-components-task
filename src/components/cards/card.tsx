import React, { useEffect, useState } from 'react';
import './card.css';
import useCharacters from './useCharacters';
import Modal from './modal';

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  location: {
    name: string;
  };
}

interface CardProps {
  title: string;
  description: string;
}

const Card = ({}: CardProps) => {
  const characters = useCharacters();
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || '');
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredCharacters(characters);
    }
    localStorage.setItem('searchTerm', searchTerm);
  }, [characters, searchTerm]);

  const handleSearch = () => {
    setFilteredCharacters(
      characters.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const handleCardClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      <div className="search">
        <input
          className="search-term "
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          search
        </button>
      </div>
      <div className="card-wrapper">
        {filteredCharacters.map((item) => (
          <div key={item.id} className="card-user" onClick={() => handleCardClick(item)}>
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
      {selectedCharacter && <Modal onClose={handleCloseModal} character={selectedCharacter} />}
    </div>
  );
};

export default Card;
