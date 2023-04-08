import React from 'react';
import './card.css';
import useCharacters from './useCharacters';

const Card = () => {
  const characters = useCharacters();

  return (
    <div className="card-wrapper">
      {characters.map((item) => (
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
  );
};

export default Card;
