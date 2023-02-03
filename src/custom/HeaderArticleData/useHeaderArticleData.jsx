import { useState, useEffect } from 'react';
import { DATA_POKEMON } from '../../utils/endpoints';
import { dataPokemon, getData, selectRandomData } from '../../services/callAllPokemon';

export const useHeaderArticleData = () => {
  const [pokemonRandom, setPokemonRandom] = useState();
  const [pokemonRandomAbility, setPokemonRandomAbility] = useState();
  const [errorFetchData, setErrorFetchData] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);

  const allData = async (data) => {
    try {
      const dataRandomPokemon = await selectRandomData(data.results);
      const pokemonRandomUrlData = await getData(dataRandomPokemon.url);
      const pokemonId = pokemonRandomUrlData.id;
      const urlRandomAbility = `${DATA_POKEMON.ability}${pokemonId}`;
      const pokemonRandomAbility = await getData(urlRandomAbility);

      if (pokemonRandomUrlData && pokemonRandomAbility) {
        setPokemonRandom(pokemonRandomUrlData);
        setPokemonRandomAbility(pokemonRandomAbility);
      } else setErrorNotification(true);
    } catch {
      setErrorFetchData(true);
    }
  };

  const resolveDataAPI = async () => {
    try {
      const urlPokemon = `${DATA_POKEMON.pokemons}`;
      const allDataAPIResolve = await dataPokemon(urlPokemon);
      if (allDataAPIResolve) allData(allDataAPIResolve);
    } catch {
      setErrorNotification(true);
    }
  };

  useEffect(() => {
    resolveDataAPI();
  }, []);

  return [pokemonRandom, pokemonRandomAbility, errorFetchData, errorNotification, resolveDataAPI];
};
