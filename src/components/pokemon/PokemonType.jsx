import { PokemonTypeMainMap } from '../article/PokemonTypeMainMap';
import { Block } from '../Block';

export const PokemonType = ({ pokemonType }) => {
  return (
    <>
      {pokemonType && (
        <Block designBlock='header__pokemon--type'>
          {pokemonType.map(type => (
            <Block key={type.style} className='grid'>
              <PokemonTypeMainMap typePokemon={type.style} icon={type.image} />
            </Block>
          ))}
        </Block>
      )}
    </>
  );
};
