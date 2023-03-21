import React from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import Card from '../../components/cards/card';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Card />
      </div>
    );
  }
}
