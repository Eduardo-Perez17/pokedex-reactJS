import { Image } from '../Image';

export const PokemonImage = ({ pokeImage }) => {
  return (
    <Image
      // todo porque usas [''] si puedes acceder con . ?
      image={pokeImage.sprites.other.home['front_default']}
      designImage='pokemon__header--img-item'
    />
  );
};
