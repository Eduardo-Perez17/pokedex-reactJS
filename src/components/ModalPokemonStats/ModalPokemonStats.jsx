import React from 'react';

import { ContainerParagraph } from '../ContainerParagraph';
import { Block } from '../Block';
import { Title } from '../Title';

const ModalPokemonStats = ({ data }) => {
  return (
    <Block designBlock='pokemon__info'>
      <Title size='lg'>Stats</Title>
      <Block designBlock='pokemon__info--stats'>
        {data.stats.map((stats) => (
          <React.Fragment key={stats.stat.name}>
            <ContainerParagraph designContainerParagraph='state__name'>{stats.stat.name}</ContainerParagraph>
            <Block designBlock='main__stats'>
              <ContainerParagraph designContainerParagraph='state__base--info'>{`${stats.base_stat}`}</ContainerParagraph>
              <div style={{ width: stats.base_stat + '%' }} className='state__base--info-percentage'></div>
            </Block>
          </React.Fragment>
        ))}
      </Block>
    </Block>
  );
};

export default ModalPokemonStats;
