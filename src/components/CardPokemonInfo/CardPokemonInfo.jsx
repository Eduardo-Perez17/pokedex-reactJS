import { PokemonName } from '../PokemonName';
import { PokemonType } from '../PokemonType';

import { Block } from '../Block';
import { ContainerParagraph } from '../ContainerParagraph';

const CardPokemonInfo = ({ pokemonData, typePokemon }) => {
  return (
    <>
      <Block designBlock='card__pokemon--info-major'>
        <ContainerParagraph>{pokemonData.id < 10 && `#0${pokemonData.id}`} </ContainerParagraph>
        <PokemonName name={pokemonData.name} />
      </Block>
      <Block designBlock='card__pokemon--info-type'>
        <PokemonType pokemonType={typePokemon} />
      </Block>
    </>
  );
};

export default CardPokemonInfo;
