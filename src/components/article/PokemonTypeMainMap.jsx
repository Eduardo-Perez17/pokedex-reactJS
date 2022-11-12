import { Block } from '../Block';
import { ContainerParagraph } from '../ContainerParagraph';
import { Image } from '../Image';

export const PokemonTypeMainMap = ({ typePokemon, icon }) => {
  return (
    <Block designBlock={`main_style_type ${typePokemon}`}>
      <ContainerParagraph designContainerParagraph='header__type--pokemon-item' paragraph={typePokemon} />
      <Image image={icon} alt={icon} designImage='icon__type--pokemon' />
    </Block>
  );
};
