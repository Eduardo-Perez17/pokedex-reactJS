import React, { useState, useEffect } from 'react';
import { dataPokemon, getData, selectRandomData } from '../services/callAllPokemon';

// todo esta funcion no deberia de estar dentro del folder de constantes

import HeaderArticleLoader from '../components/loaders/HeaderArticleLoader';

import { Block } from './Block';
import { Pokemon } from './Pokemon';
import { Button } from './Button';
import refresh from '../assets/img/refresh.png';

import '../assets/styles/pokemon.css';

export const HeaderArticle = () => {
  const [pokemonRandom, setPokemonRandom] = useState();
  const [pokemonRandomAbility, setPokemonRandomAbility] = useState();

  // todo maneja los errores y usa loaders
  const allData = async data => {
    const dataRandomPokemon = await selectRandomData(data.results);
    const pokemonRandomUrlData = await getData(dataRandomPokemon.url);
    const pokemonId = pokemonRandomUrlData.id;

    // todo usa variables de entorno para la base_api
    const pokemonRandomAbility = await getData(`https://pokeapi.co/api/v2/ability/${pokemonId}`);

    // todo valida que si hay date la guarde caso contrario tu veras que haces
    setPokemonRandom(pokemonRandomUrlData);
    setPokemonRandomAbility(pokemonRandomAbility);
  };

  // todo maneja errores y usa loaders
  const resolveDataAPI = async () => {
    // todo usa variables de entorno para la base_api
    const allDataAPIResolve = await dataPokemon(`https://pokeapi.co/api/v2/pokemon`);

    // todo valida la data
    allData(allDataAPIResolve);
  };

  useEffect(() => {
    resolveDataAPI();
  }, []);

  return (
    <Block>
      {pokemonRandom ? (
        <>
          <Pokemon data={pokemonRandom} ability={pokemonRandomAbility} />
          {/* // todo la prop "btnEvent" no me dice nada sobre lo que hace. Es un onClick? onFocus? onQue ? */}
          <Button
            typeButton='button'
            btnEvent={resolveDataAPI}
            text='refresh'
            designButton='button header__details--button btn-refresh'
            iconButton={refresh}
            iconButtonInfo={refresh}
            iconButtonStyle='icon__button--header'
          />
        </>
      ) : (
        <HeaderArticleLoader />
      )}

      {/* // todo saca esto a un componente */}
      <Block designBlock='main-burble'>
        <Block designBlock='burble'></Block>
        <Block designBlock='burble'></Block>
        <Block designBlock='burble'></Block>
        <Block designBlock='burble'></Block>
        <Block designBlock='burble'></Block>
        <Block designBlock='burble'></Block>
      </Block>
    </Block>
  );
};
