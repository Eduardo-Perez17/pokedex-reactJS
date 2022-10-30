import { Block } from './Block';
import { Image } from './Image';

export const PokemonTypeDecoration = ({ typeIcon }) => {
  return (
    <Block designBlock='main__decoration--type'>
      <Block designBlock='main__decoration--type-item'></Block>
      <Image
        image={typeIcon}
        alternativeText={typeIcon}
        designImage='main__decoration--type-image'
      />
      <Block designBlock='main__decoration--type-item'></Block>
    </Block>
  );
};
