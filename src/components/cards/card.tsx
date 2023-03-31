import React from 'react';
import './card.css';
import data from '../../data.json';

export default class Card extends React.Component {
  render() {
    return (
      <div className="card-wrapper">
        {data.map((card, index) => (
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
  }
}
