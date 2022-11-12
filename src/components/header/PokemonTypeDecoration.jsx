import { Block } from '../Block';
import { Image } from '../Image';

export const PokemonTypeDecoration = ({ typeIcon }) => {
  return (
    <Block designBlock='main__decoration--type'>
      <Image image={typeIcon} alternativeText={typeIcon} designImage='main__decoration--type-image after-before' />
    </Block>
  );
};
