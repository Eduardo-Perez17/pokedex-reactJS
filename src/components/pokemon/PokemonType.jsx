import { Block } from '../Block';
import { PokemonTypeMainMap } from '../article/PokemonTypeMainMap';

export const PokemonType = ({ type, pokemonTypeIcon, icon }) => {
  return (
    <Block designBlock='header__pokemon--type'>
      {type.map(pokemonTypes => {
        // todo esto esta mal, porque hay pokemons que tienen 2 tipos, estas seteando 2 veces este estado y esta mal
        // todo si ya el padre de este componente maneja esta data hazlo ahi y agarra solo 1 tipo y una vez guardado se lo pasas a este componente
        pokemonTypeIcon(pokemonTypes.type.name);
        return (
          <Block key={pokemonTypes.type.name} className='grid'>
            <PokemonTypeMainMap typePokemon={pokemonTypes.type.name} icon={icon} />
          </Block>
        );
      })}
    </Block>
  );
};
