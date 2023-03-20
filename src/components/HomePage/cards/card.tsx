import React from 'react';
import './card.css';
import data from '../../../data.json';

export default class Card extends React.Component {
  render() {
    return (
      <div className="card-wrapper">
        {data.map((card, index) => (
          <div key={index} className="card">
            <img className="cars-image" src={card.img} alt="users-cars" />
            <h2>{card.name}</h2>
            <p>age: {card.age}</p>
            <p>car: {card.car}</p>
          </div>
        ))}
      </div>
    );
  }
}
