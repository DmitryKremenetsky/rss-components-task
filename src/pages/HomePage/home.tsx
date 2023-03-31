import React from 'react';
import Navigation from '../../components/Navigation/navigation';
import Card from '../../components/cards/card';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Card />
      </div>
    );
  }
}
