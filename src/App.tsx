import './App.css';
import SearchBar from './components/searchBar/searchBar';
import Card from './components/cards/card';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Card />
    </div>
  );
}

export default App;
