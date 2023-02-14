import { ICON_BURSY } from '../../utils/images';
import { useTypeBackground } from '../../custom/TypeBackground/useTypeBackground';
import { useTypeIcon } from '../../custom/TypeIcon/useTypeIcon';

import { ContainerParagraph } from '../ContainerParagraph';
import { Block } from '../Block';
import { Image } from '../Image';

const PokemonDetailArticleMoves = ({ pokemonData }) => {
  const [typePokemon] = useTypeIcon(pokemonData?.types);
  const [typeBackground] = useTypeBackground(typePokemon);

  return (
    <>
      {pokemonData.moves.map((move) => (
        <Block key={move.move.name} designBlock={`pokemon__detail--article-moves-item ${typeBackground}`}>
          <Image image={ICON_BURSY.image} alternativeText={ICON_BURSY.alt} />
          <ContainerParagraph>{move.move.name}</ContainerParagraph>
        </Block>
      ))}
    </>
  );
};

export default PokemonDetailArticleMoves;
