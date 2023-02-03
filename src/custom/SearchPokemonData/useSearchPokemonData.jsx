import { useState } from 'react';
import { dataPokemon } from '../../services/callAllPokemon';
import { URL_SEARCH } from '../../utils/endpoints';

export const useSearchPokemonData = ({ setPokemonValue }) => {
  const [inputPokemon, setInputPokemon] = useState('');
  const [searchError, setSearchError] = useState(false);

  const handleInputPokemon = (e) => setInputPokemon(e.target.value);

  const searchPokemonDataHandle = async (e) => {
    e.preventDefault();
    try {
      const urlSearch = `${URL_SEARCH.search}${inputPokemon.toLowerCase()}`;

      if (inputPokemon) {
        const searchPokemon = await dataPokemon(urlSearch);
        setPokemonValue(searchPokemon);
        setSearchError(false);
      }
    } catch {
      setSearchError(true);
    }
  };

  return [inputPokemon, searchError, handleInputPokemon, searchPokemonDataHandle];
};
