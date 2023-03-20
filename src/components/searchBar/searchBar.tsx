import React from 'react';
import './searchBar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchHistory: '',
    };
  }

  componentDidMount() {
    const searchTerm = localStorage.getItem('searchTerm');
    if (searchTerm) {
      this.setState({ searchTerm });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('searchTerm', this.state.searchHistory);
  }

  handleChange = event => {
    this.setState({ searchHistory: event.target.value });
  };

  render() {
    return (
      <div className="space-bar_container">
        <input
          type="text"
          value={this.state.searchHistory}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}
