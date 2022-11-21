import useTypeIcon from '../../context/useTypeIcon';
import { iconsCard } from '../../utils/constants/constant';

import { ContainerParagraph } from '../ContainerParagraph';
import { PokemonName } from '../pokemon/PokemonName';
import { PokemonType } from '../pokemon/PokemonType';
import { Block } from '../Block';
import { Image } from '../Image';
import { Title } from '../Title';

import '../../assets/styles/pokemonArticle.css';

export const PokemonArticle = ({ pokemonData }) => {
  const [typeIcon] = useTypeIcon(pokemonData);

  return (
    <>
      {pokemonData && (
        <Block designBlock={`card__pokemon ${typeIcon}_background`}>
          <Block designBlock='card__pokemon--main-img'>
            <Image
              image={pokemonData.sprites.other.home['front_default']}
              alternativeText={pokemonData.sprites.other.home['front_default']}
              designImage='card__pokemon--item-img pokemon__header--img-item'
            />
          </Block>
          <Block designBlock='card__pokemon--info-major'>
            <ContainerParagraph paragraph={pokemonData.id < 10 ? `#0${pokemonData.id}` : `#${pokemonData.id}`} />
            <PokemonName name={pokemonData.name} />
          </Block>
          <Block designBlock='card__pokemon--info-type'>
            <PokemonType type={pokemonData.types} icon={typeIcon} />
          </Block>
          <Block designBlock='card__pokemon--info-secundary'>
            <Block designBlock='card__pokemon--info-secundary-item'>
              <ContainerParagraph paragraph='weight' />
              <Block designBlock='card__pokemon--info-weight'>
                <Image image={iconsCard.weight} alternativeText={iconsCard.weight} />
                <ContainerParagraph paragraph={`${pokemonData.weight} kg`} />
              </Block>
            </Block>
            <Block designBlock='card__pokemon--info-secundary-item'>
              <ContainerParagraph paragraph='height' />
              <Block designBlock='card__pokemon--info-heigth'>
                <Image image={iconsCard.height} alternativeText={iconsCard.height} />
                <ContainerParagraph paragraph={pokemonData.height < 10 ? `0.${pokemonData.height} m` : `${pokemonData.height} m`} />
              </Block>
            </Block>
          </Block>
        </Block>
      )}
    </>
  );
};
