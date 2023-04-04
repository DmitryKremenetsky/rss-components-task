import React from 'react';
import './card.css';
import data from '../../data.json';

interface CardData {
  img: string;
  name: string;
  age: number;
  pos: string;
}

const Card = (): JSX.Element => {
  return (
    <div className="card-wrapper">
      {data.map((card: CardData, index: number) => (
        <div key={index} className="card-user">
          <img className="user-img" src={card.img} alt="users-img" />
          <div className="container">
            <h2>{card.name}</h2>
            <p>age: {card.age}</p>
            <p>position: {card.pos}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
