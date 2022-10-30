import { useContext } from 'react';
import UseTypePokemon from '../../context/UseTypePokemon';

import { Block } from '../Block';
import { PokemonTypeMainMap } from '../PokemonTypeMainMap';

export const PokemonType = ({ type, pokemonTypeIcon, icon }) => {
  const contextType = useContext(UseTypePokemon);

  return (
    <Block designBlock='header__pokemon--type'>
      {type.map(e => {
        pokemonTypeIcon(e.type.name);
        return (
          <div key={e.type.name} className='grid'>
            <PokemonTypeMainMap iterable={e.type.name} icon={icon} />
          </div>
        );
      })}
    </Block>
  );
};
