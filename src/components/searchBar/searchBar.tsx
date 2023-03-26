import React from 'react';
import './searchBar.css';

interface State {
  searchTerm: string;
}

export default class SearchBar extends React.Component<void, State> {
  constructor(props: void) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {
    const searchTerm = localStorage.getItem('searchTerm');
    if (searchTerm) {
      this.setState({ searchTerm });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('searchTerm', this.state.searchTerm);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="space-bar_container">
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        <button>Search</button>
      </div>
    );
  }
}
