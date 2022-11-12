import { Block } from '../Block';
import { Image } from '../Image';

// todo para esos div vacios usa before y after y deja de meter html inceseario al DOM
export const PokemonTypeDecoration = ({ typeIcon }) => {
  return (
    <Block designBlock='main__decoration--type'>
      {/* // todo porque aqui hay un div vacio ? */}
      <Block designBlock='main__decoration--type-item'></Block>
      <Image image={typeIcon} alternativeText={typeIcon} designImage='main__decoration--type-image' />
      {/* // todo y aqui tambien ? */}
      <Block designBlock='main__decoration--type-item'></Block>
    </Block>
  );
};
