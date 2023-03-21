import React from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import Card from '../../components/cards/card';
import Navigation from '../../components/Navigation/navigation';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <SearchBar />
        <Card />
      </div>
    );
  }
}
