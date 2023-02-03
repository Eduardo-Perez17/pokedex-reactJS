import { Block } from '../Block';
import { ContainerParagraph } from '../ContainerParagraph';
import { Image } from '../Image';

const PokemonTypeMainMap = ({ typePokemon, icon }) => {
  return (
    <Block designBlock={`main_style_type ${typePokemon}`}>
      <ContainerParagraph designContainerParagraph='header__type--pokemon-item'>{typePokemon}</ContainerParagraph>
      <Image image={icon} designImage='icon__type--pokemon' />
    </Block>
  );
};

export default PokemonTypeMainMap;
