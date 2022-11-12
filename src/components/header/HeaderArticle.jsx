import { useState, useEffect } from 'react';
import { dataPokemon, getData, selectRandomData } from '../../services/callAllPokemon';

import { ErrorNotification } from '../ErrorNotification';
import { LoaderHeader } from '../loaders/LoaderHeader';
import { Pokemon } from './Pokemon';
import { Button } from '../Button';
import { Burble } from './Burble';
import { Image } from '../Image';

import '../../assets/styles/pokemon.css';
import '../../assets/styles/loaders.css';

import refresh from '../../assets/img/refresh.png';

export const HeaderArticle = () => {
  const [pokemonRandom, setPokemonRandom] = useState();
  const [pokemonRandomAbility, setPokemonRandomAbility] = useState();
  const [errorFetchData, setErrorFetchData] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);

  const allData = async data => {
    try {
      const dataRandomPokemon = await selectRandomData(data.results);
      const pokemonRandomUrlData = await getData(dataRandomPokemon.url);
      const pokemonId = pokemonRandomUrlData.id;
      const urlRandomAbility = `https://pokeapi.co/api/v2/ability/${pokemonId}`;
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
      const urlPokemon = `https://pokeapi.co/api/v2/pokemon`;
      const allDataAPIResolve = await dataPokemon(urlPokemon);
      if (allDataAPIResolve) allData(allDataAPIResolve);
    } catch {
      setErrorNotification(true);
    }
  };

  useEffect(() => {
    resolveDataAPI();
  }, []);

  return (
    <>
      {errorNotification && <ErrorNotification />}
      {pokemonRandom ? (
        <>
          <Pokemon data={pokemonRandom} ability={pokemonRandomAbility} error={errorFetchData} />
          <Button typeButton='button' onClick={resolveDataAPI} designButton='button header__details--button btn-refresh' iconButton={refresh}>
            refresh
            <Image image={refresh} alternativeText={refresh} designImage='icon icon__button--header' />
          </Button>
        </>
      ) : (
        <LoaderHeader />
      )}
      <Burble />
    </>
  );
};
