import { PokemonTypeMainMap } from '../PokemonTypeMainMap';
import { Block } from '../Block';

const PokemonType = ({ pokemonType }) => {
  return (
    <>
      {pokemonType && (
        <Block designBlock='header__pokemon--type'>
          {pokemonType.map((type) => (
            <Block key={type.style} className='grid'>
              <PokemonTypeMainMap typePokemon={type.style} icon={type.image} />
            </Block>
          ))}
        </Block>
      )}
    </>
  );
};

export default PokemonType;
