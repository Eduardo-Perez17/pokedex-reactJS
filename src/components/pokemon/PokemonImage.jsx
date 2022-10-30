import { Image } from '../Image';

export const PokemonImage = ({ pokeImage }) => {
  return (
    <Image
      image={pokeImage.sprites.other.home['front_default']}
      designImage='pokemon__header--img-item'
    />
  );
};
