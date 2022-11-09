import { ContainerParagraph } from '../ContainerParagraph';
// type;

export const PokemonAbility = ({ ability }) => {
  return <ContainerParagraph paragraph={ability['effect_entries'][0].effect} />;
};
