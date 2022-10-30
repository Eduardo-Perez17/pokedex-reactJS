import { useState, useEffect } from 'react';
import { icons } from '../utils/constants/contant';
import { iconsCard } from '../utils/constants/contant';

import { Block } from './Block';
import { Image } from './Image';
import { ContainerParagraph } from './ContainerParagraph';
import { Title } from './Title';
import { PokemonType } from './pokemon/PokemonType';

import '../assets/styles/pokemonArticle.css';

export const PokemonArticle = ({ pokemonData }) => {
  const [pokemonTypeIcon, setPokemonTypeIcon] = useState();
  const [typeIcon, setTypeIcon] = useState();

  useEffect(() => {
    setTypeIcon(icons[pokemonTypeIcon]);
  });

  return (
    <>
      {pokemonData ? (
        <Block designBlock={`card__pokemon ${pokemonTypeIcon}_background`}>
          <Block designBlock='card__pokemon--main-img'>
            <Image
              image={pokemonData.sprites.other.home['front_default']}
              alternativeText={pokemonData.sprites.other.home['front_default']}
              designImage='card__pokemon--item-img pokemon__header--img-item'
            />
          </Block>
          <Block designBlock='card__pokemon--info-major'>
            <ContainerParagraph paragraph={pokemonData.id < 10 ? `#0${pokemonData.id}` : `#${pokemonData.id}`} />
            <Title title={pokemonData.name} />
          </Block>
          <Block designBlock='card__pokemon--info-type'>
            <PokemonType type={pokemonData.types} icon={typeIcon} pokemonTypeIcon={setPokemonTypeIcon} />
          </Block>
          <Block designBlock='card__pokemon--info-secundary'>
            <Block designBlock='card__pokemon--info-secundary-item'>
              <Block designBlock='card__pokemon--info-weight'>
                <Image image={iconsCard.weight} alternativeText={iconsCard.weight} />
                <ContainerParagraph paragraph={`${pokemonData.weight} kg`} />
              </Block>
              <ContainerParagraph paragraph='weight' />
            </Block>
            <Block designBlock='card__pokemon--info-secundary-item'>
              <Block designBlock='card__pokemon--info-heigth'>
                <Image image={iconsCard.height} alternativeText={iconsCard.height} />
                <ContainerParagraph paragraph={pokemonData.height < 10 ? `0.${pokemonData.height} m` : `${pokemonData.height} m`} />
              </Block>
              <ContainerParagraph paragraph='height' />
            </Block>
          </Block>
        </Block>
      ) : null}
    </>
  );
};
