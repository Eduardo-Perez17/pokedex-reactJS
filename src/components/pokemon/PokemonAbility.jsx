import { ContainerParagraph } from '../ContainerParagraph';

export const PokemonAbility = ({ ability }) => {
  return <ContainerParagraph paragraph={ability.effect_entries[0].effect} />;
};
