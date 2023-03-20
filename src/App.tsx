import './App.css';
import SearchBar from './components/HomePage/searchBar/searchBar';
import Card from './components/HomePage/cards/card';

function App(): JSX.Element {
  return (
    <div className="App">
      <SearchBar />
      <Card />
    </div>
  );
}

export default App;
