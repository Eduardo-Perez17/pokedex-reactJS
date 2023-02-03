import { ICON_CARD } from '../../utils/images';

import { ContainerParagraph } from '../ContainerParagraph';
import { Block } from '../Block';
import { Image } from '../Image';

const CardPokemonInfoSecundary = ({ pokemonData }) => {
  return (
    <Block designBlock='card__pokemon--info-secundary'>
      <Block designBlock='card__pokemon--info-secundary-item'>
        <ContainerParagraph>weight</ContainerParagraph>
        <Block designBlock='card__pokemon--info-weight'>
          <Image image={ICON_CARD.weight} alternativeText={ICON_CARD.weight} />
          <ContainerParagraph>{`${pokemonData.weight} kg`}</ContainerParagraph>
        </Block>
      </Block>
      <Block designBlock='card__pokemon--info-secundary-item'>
        <ContainerParagraph>height</ContainerParagraph>
        <Block designBlock='card__pokemon--info-heigth'>
          <Image image={ICON_CARD.height} alternativeText={ICON_CARD.height} />
          <ContainerParagraph>
            {pokemonData.height < 10 ? `0${pokemonData.height} cm` : `${pokemonData.height} cm`}
          </ContainerParagraph>
        </Block>
      </Block>
    </Block>
  );
};

export default CardPokemonInfoSecundary;
