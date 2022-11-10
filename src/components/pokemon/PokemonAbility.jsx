import { ContainerParagraph } from '../ContainerParagraph';
// type; // todo que es esto que dejaste aqui ?

export const PokemonAbility = ({ ability }) => {
  // todo porque usas [''] si puedes acceder con . ?
  return <ContainerParagraph paragraph={ability['effect_entries'][0].effect} />;
};
