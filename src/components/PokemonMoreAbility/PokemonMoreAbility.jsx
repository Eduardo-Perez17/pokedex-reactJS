import React from 'react';
import { ICON_STAR } from '../../utils/images';

import { ContainerParagraph } from '../ContainerParagraph';
import { Image } from '../Image';
import { Block } from '../Block';

const PokemonMoreAbility = ({ dataMoreAbility }) => {
  return (
    <>
      {dataMoreAbility.map((ability) => (
        <React.Fragment key={ability.ability.name}>
          <Block designBlock='main__ability'>
            <ContainerParagraph>{ability.ability.name}</ContainerParagraph>
            <Image image={ICON_STAR.image} alternativeText={ICON_STAR.alt} />
          </Block>
        </React.Fragment>
      ))}
    </>
  );
};

export default PokemonMoreAbility;
