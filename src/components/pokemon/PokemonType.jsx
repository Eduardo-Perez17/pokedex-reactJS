import { Block } from '../Block';
import { PokemonTypeMainMap } from '../PokemonTypeMainMap';

export const PokemonType = ({ type, pokemonTypeIcon, icon }) => {
  return (
    <Block designBlock='header__pokemon--type'>
      {/* // todo "e" no me dice nada sobre lo que se esta iterando  */}
      {type.map(e => {
        // todo esto esta mal, porque hay pokemons que tienen 2 tipos, estas seteando 2 veces este estado y esta mal
        // todo si ya el padre de este componente maneja esta data hazlo ahi y agarra solo 1 tipo y una vez guardado se lo pasas a este componente
        pokemonTypeIcon(e.type.name);
        return (
          // todo tienes un componente para los div y no lo usas aqui pero si arriba
          <div key={e.type.name} className='grid'>
            <PokemonTypeMainMap iterable={e.type.name} icon={icon} />
          </div>
        );
      })}
    </Block>
  );
};
