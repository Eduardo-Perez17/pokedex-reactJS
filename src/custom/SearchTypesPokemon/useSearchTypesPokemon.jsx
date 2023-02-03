import { useState, useEffect } from 'react';
import { DATA_POKEMON } from '../../utils/endpoints';
import { dataPokemon } from '../../services/callAllPokemon';

export const useSearchTypesPokemon = () => {
  const [typesPokemonData, setTypesPokemonData] = useState();

  const resolveDataAPI = async () => {
    const urlAllData = `${DATA_POKEMON.type}`;
    const allData = await dataPokemon(urlAllData);
    setTypesPokemonData(allData);
  };

  useEffect(() => {
    resolveDataAPI();
  }, []);

  return [typesPokemonData];
};
