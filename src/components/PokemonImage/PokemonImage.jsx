import { Image } from '../Image';

const PokemonImage = ({ pokeImage }) => {
  return <Image image={pokeImage.sprites.other.home.front_default} designImage='pokemon__header--img-item' />;
};

export default PokemonImage;
