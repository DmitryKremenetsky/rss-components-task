import React from 'react';
import './searchBar.css';

type Props = Record<string, unknown>;
interface State {
  searchTerm: string;
}

export default class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
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
      <div className="search">
        <input
          className="search-term"
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button className="search-btn">Search</button>
      </div>
    );
  }
}
