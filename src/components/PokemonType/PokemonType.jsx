import React from 'react';
import { PokemonTypeMainMap } from '../PokemonTypeMainMap';
import { Block } from '../Block';

const PokemonType = ({ pokemonType }) => {
  return (
    <>
      {pokemonType && (
        <Block designBlock='header__pokemon--type'>
          {pokemonType.map((type) => (
            <React.Fragment key={type.style}>
              <Block className='grid'>
                <PokemonTypeMainMap typePokemon={type.style} icon={type.image} />
              </Block>
            </React.Fragment>
          ))}
        </Block>
      )}
    </>
  );
};

export default PokemonType;
