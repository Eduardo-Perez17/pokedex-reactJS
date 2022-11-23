import { useState, useEffect } from 'react';
import useTypeIcon from '../../context/useTypeIcon';

import { PokemonTypeDecoration } from './PokemonTypeDecoration';
import { HeaderError } from './HeaderError';
import { Details } from '../Details';
import { Block } from '../Block';

import { PokemonAbility } from '../pokemon/PokemonAbility';
import { PokemonImage } from '../pokemon/PokemonImage';
import { PokemonType } from '../pokemon/PokemonType';
import { PokemonName } from '../pokemon/PokemonName';
import { PokemonId } from '../pokemon/PokemonId';

import '../../assets/styles/headerArticle.css';

export const Pokemon = ({ data, ability, error }) => {
  const [typePokemon] = useTypeIcon(data.types);
  const [typePokemonImageStyles, setTypePokemonImageStyles] = useState([]);

  useEffect(() => {
    setTypePokemonImageStyles(typePokemon);
  }, [typePokemon]);

  return (
    <>
      {error ? (
        <HeaderError />
      ) : (
        <Block designBlock='header__article--pokemon'>
          <Block>
            <PokemonId id={data.id} />
            <PokemonType pokemonType={typePokemonImageStyles} />
            <PokemonName name={data.name} />
            <PokemonAbility ability={ability} />
            <Details dataPokemon={data} />
          </Block>
          <PokemonTypeDecoration typeIcon={typePokemonImageStyles} />
          <Block designBlock='pokemon__header--img'>
            <PokemonImage pokeImage={data} />
          </Block>
        </Block>
      )}
    </>
  );
};
