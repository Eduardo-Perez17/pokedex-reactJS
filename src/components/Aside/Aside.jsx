import React from 'react';
import { useAsideData } from '../../custom/AsideData/useAsideData';
// import {  } '../../custom/TypeIcon'

import './aside.css';

import { Details } from '../Details';
import { PokemonImage } from '../PokemonImage';
import { PokemonName } from '../PokemonName';
import { PokemonType } from '../PokemonType';
import { PokemonId } from '../PokemonId';
import { Block } from '../Block';
import { Title } from '../Title';

const Aside = () => {
  const [pokemonsRandom] = useAsideData();

  return (
    <Block designBlock='aside'>
      <Title size='lg'>Descubre estos pokemones</Title>
      <Block designBlock='aside__card--main'>
        {pokemonsRandom?.map((dataPokemon) => (
          <React.Fragment key={dataPokemon.id}>
            <Block designBlock='aside-card'>
              <Block designBlock='aside__card--info'>
                <PokemonId id={dataPokemon.id} />
                <PokemonName name={dataPokemon.name} />
                <PokemonType />
              </Block>
              <Block designBlock='aside__card--img'>
                <PokemonImage pokeImage={dataPokemon} pokeImageStyle='pokemon__header--img-item' />
              </Block>
              <Details pokemonsRandom={pokemonsRandom} />
            </Block>
          </React.Fragment>
        ))}
      </Block>
    </Block>
  );
};

export default Aside;
