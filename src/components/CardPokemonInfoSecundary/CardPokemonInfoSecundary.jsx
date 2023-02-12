import { ICON_CARD } from '../../utils/images';

import { ContainerParagraph } from '../ContainerParagraph';
import { Block } from '../Block';
import { Image } from '../Image';

const CardPokemonInfoSecundary = ({ pokemonData }) => {
  const height = pokemonData.height;
  const weight = pokemonData.weight;

  return (
    <Block designBlock='card__pokemon--info-secundary'>
      <Block designBlock='card__pokemon--info-secundary-item'>
        <ContainerParagraph>weight</ContainerParagraph>
        <Block designBlock='card__pokemon--info-weight'>
          <Image image={ICON_CARD.weight} alternativeText={ICON_CARD.weight} />
          <ContainerParagraph>
            {weight < 10 ? `0,${weight} kg` : `${weight.toFixed().charAt(0)},${weight.toFixed().charAt(1)} kg`}
          </ContainerParagraph>
        </Block>
      </Block>
      <Block designBlock='card__pokemon--info-secundary-item'>
        <ContainerParagraph>height</ContainerParagraph>
        <Block designBlock='card__pokemon--info-heigth'>
          <Image image={ICON_CARD.height} alternativeText={ICON_CARD.height} />
          <ContainerParagraph>
            {height < 10 ? `0,${height} m` : `${height.toFixed().charAt(0)},${height.toFixed().charAt(1)} m`}
          </ContainerParagraph>
        </Block>
      </Block>
    </Block>
  );
};

export default CardPokemonInfoSecundary;
