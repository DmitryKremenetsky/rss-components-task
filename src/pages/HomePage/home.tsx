import React from 'react';
import Navigation from '../../components/Navigation/navigation';
import SearchBar from '../../components/searchBar/searchBar';
import Card from '../../components/cards/card';

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
