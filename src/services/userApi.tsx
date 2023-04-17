import { useState, useEffect } from 'react';

interface Character {
  id: number;
  name: string;
  species: string;
  location: {
    name: string;
  };
  image: string;
}

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error(error));
  }, []);

  return characters;
};

export default useCharacters;
