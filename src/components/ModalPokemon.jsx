import React from 'react';
import ReactDOM from 'react-dom';

import { PokemonArticle } from '../components/article/PokemonArticle';
import { Button } from '../components/Button';
import { Block } from './Block';
import { Title } from './Title';

import '../assets/styles/modal.css';
import { ContainerParagraph } from './ContainerParagraph';

export const ModalPokemon = ({ handdleModalOpen, modalOpen, dataPokemon: data, validationMoreDetails }) => {
  return ReactDOM.createPortal(
    <Block designBlock='modal'>
      <Block designBlock='modal__container'>
        <Block>
          <PokemonArticle pokemonData={data} validationMoreDetails={validationMoreDetails} />
          <Button typeButton='button' designButton='button modal__close-button' onClick={() => handdleModalOpen(!modalOpen)}>
            ✖
          </Button>
        </Block>
        <Block designBlock='pokemon__info'>
          <Title>
            <h2>Stats</h2>
          </Title>
          <Block designBlock='pokemon__info--stats'>
            {data.stats.map(stats => (
              <React.Fragment key={stats.stat.name}>
                <ContainerParagraph paragraph={stats.stat.name} designContainerParagraph='state__name' />
                <Block designBlock='main__stats'>
                  {console.log(stats)}
                  <ContainerParagraph paragraph={`${stats.base_stat}`} designContainerParagraph='state__base--info' />
                  <div style={{ width: stats.base_stat + '%' }} className='state__base--info-percentage'></div>
                </Block>
              </React.Fragment>
            ))}
          </Block>
        </Block>
      </Block>
    </Block>,
    document.getElementById('modal')
  );
};
