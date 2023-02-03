import { Block } from '../Block';
import { Image } from '../Image';

const CardPokemonMain = ({ pokemonData }) => {
  return (
    <Block designBlock='card__pokemon--main-img'>
      <Image
        image={pokemonData.sprites.other.home.front_default}
        alternativeText={pokemonData.sprites.other.home.front_default}
        designImage='card__pokemon--item-img pokemon__header--img-item'
      />
    </Block>
  );
};

export default CardPokemonMain;
