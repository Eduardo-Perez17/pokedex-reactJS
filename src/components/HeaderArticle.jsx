import React, { useState, useEffect } from 'react';
import { dataPokemon, getData } from '../services/callAllPokemon';
import { selectRandomData } from '../utils/constants/ramdonData';
import HeaderArticleLoader from '../components/loaders/HeaderArticleLoader';

import { Block } from './Block';
import { Pokemon } from './Pokemon';
import { Button } from './Button';
import refresh from '../assets/img/refresh.png';

import '../assets/styles/pokemon.css';

export const HeaderArticle = () => {
  const [pokemonRandom, setPokemonRandom] = useState();
  const [pokemonRandomAbility, setPokemonRandomAbility] = useState();

  const allData = async data => {
    const dataRandomPokemon = await selectRandomData(data.results);
    const pokemonRandomUrlData = await getData(dataRandomPokemon.url);
    const pokemonId = pokemonRandomUrlData.id;
    const pokemonRandomAbility = await getData(`https://pokeapi.co/api/v2/ability/${pokemonId}`);
    setPokemonRandom(pokemonRandomUrlData);
    setPokemonRandomAbility(pokemonRandomAbility);
  };

  const resolveDataAPI = async () => {
    const allDataAPIResolve = await dataPokemon(`https://pokeapi.co/api/v2/pokemon`);
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
