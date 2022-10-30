import { ContainerParagraph } from '../ContainerParagraph';

export const PokemonAbility = ({ ability, type }) => {
  return <ContainerParagraph paragraph={ability['effect_entries'][0].effect} />;
};
