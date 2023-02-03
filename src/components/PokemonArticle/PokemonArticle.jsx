import { useTypeIcon } from '../../custom/TypeIcon/useTypeIcon';
import { useTypeBackground } from '../../custom/TypeBackground/useTypeBackground';

import '../../assets/styles/pokemonArticle.css';

import { CardPokemonInfoSecundary } from '../CardPokemonInfoSecundary';
import { CardPokemonMain } from '../CardPokemonMain';
import { CardPokemonInfo } from '../CardPokemonInfo';
import { Details } from '../Details';
import { Block } from '../Block';

const PokemonArticle = ({ pokemonData, validationMoreDetails }) => {
  const [typePokemon] = useTypeIcon(pokemonData.types);
  const [typeBackground] = useTypeBackground(typePokemon);

  return (
    <>
      {pokemonData ? (
        <Block designBlock={`card__pokemon ${typeBackground}_background`}>
          <CardPokemonMain pokemonData={pokemonData} />
          <CardPokemonInfo pokemonData={pokemonData} typePokemon={typePokemon} />
          <CardPokemonInfoSecundary pokemonData={pokemonData} />
          {validationMoreDetails ? null : <Details dataPokemon={pokemonData} />}
        </Block>
      ) : null}
    </>
  );
};

export default PokemonArticle;
