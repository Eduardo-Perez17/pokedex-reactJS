import { useState, useEffect } from 'react';
import { DATA_OFFSET_LIMIT } from '../../utils/endpoints';
import { dataPokemon } from '../../services/callAllPokemon';

export const useAsideData = () => {
  const [pokemonsRandom, setPokemonRandom] = useState();

  const getDataPokemonsRandom = async () => {
    const path = await dataPokemon(`${DATA_OFFSET_LIMIT.limit}22${DATA_OFFSET_LIMIT.offset}435`);
    const randomNumber = Math.floor(Math.random() * 18);
    const fourPokemons = path?.results?.slice(randomNumber, randomNumber + 4);

    const promises = fourPokemons.map(async (e) => {
      return await dataPokemon(e.url);
    });

    const results = await Promise.all(promises);
    setPokemonRandom(results);
  };

  useEffect(() => {
    getDataPokemonsRandom();
  }, []);

  return [pokemonsRandom];
};
