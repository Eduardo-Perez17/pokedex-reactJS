import { useState } from 'react';
import { dataPokemon } from '../../services/callAllPokemon';
import { URL_SEARCH } from '../../utils/endpoints';

export const useSearchPokemonData = (inputPokemon) => {
  const [pokemonSearch, setPokemonSearch] = useState();
  const [searchError, setSearchError] = useState(false);

  const searchPokemonDataHandle = async (e) => {
    e.preventDefault();
    const urlSearch = `${URL_SEARCH.search}${inputPokemon.toLowerCase()}`;

    try {
      if (inputPokemon) {
        const searchPokemon = await dataPokemon(urlSearch);
        setPokemonSearch(searchPokemon);
        setSearchError(false);
      }
    } catch {
      setSearchError(true);
    }
  };

  return [pokemonSearch, searchError, searchPokemonDataHandle, setPokemonSearch];
};
