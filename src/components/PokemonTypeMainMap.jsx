import { Block } from './Block';
import { ContainerParagraph } from './ContainerParagraph';
import { Image } from './Image';

// todo la prop iterable no me dice nada sobre el contenido que tiene
// todo que hay aqui un nombre un precio o un objeto ?
export const PokemonTypeMainMap = ({ iterable, icon }) => {
  return (
    <Block designBlock={`main_style_type ${iterable}`}>
      <ContainerParagraph designContainerParagraph='header__type--pokemon-item' paragraph={iterable} />
      <Image image={icon} alt={icon} designImage='icon__type--pokemon' />
    </Block>
  );
};
