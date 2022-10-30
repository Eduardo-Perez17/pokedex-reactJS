import { ContainerParagraph } from '../ContainerParagraph';

export const PokemonId = ({ id }) => {
  return (
    <ContainerParagraph
      designContainerParagraph='header__id--pokemon'
      paragraph={`#0${id}`}
    />
  );
};
