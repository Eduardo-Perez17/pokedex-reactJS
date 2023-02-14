import { ContainerParagraph } from '../ContainerParagraph';

const PokemonAbility = ({ ability }) => {
  return <ContainerParagraph>{ability?.effect_entries[1]?.effect}</ContainerParagraph>;
};

export default PokemonAbility;
