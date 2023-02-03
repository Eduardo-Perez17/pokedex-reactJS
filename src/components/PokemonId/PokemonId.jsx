import { ContainerParagraph } from '../ContainerParagraph';

const PokemonId = ({ id }) => {
  return <ContainerParagraph designContainerParagraph='header__id--pokemon'>{`#0${id}`}</ContainerParagraph>;
};

export default PokemonId;
