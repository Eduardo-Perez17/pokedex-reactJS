import { Block } from '../Block';
import { PokemonTypeMainMap } from '../PokemonTypeMainMap';

export const PokemonType = ({ type, pokemonTypeIcon, icon }) => {
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
