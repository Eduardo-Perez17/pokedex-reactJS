import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/modal.css';

import { Block } from './Block';
import { Button } from '../components/Button';

export const ModalPokemon = () => {
  const [modalPokemon, setModalPokemon] = React.useState(true);

  const handleModal = () => setModalPokemon(false);

  return ReactDOM.createPortal(
    <>
      {modalPokemon ? (
        <Block designBlock='container'>
          <Block designBlock='modal'>
            <h1>Hola mundo!</h1>
            <Button typeButton='button' text='close' btnEvent={handleModal} designButton='button header__details--button' />
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
              impresor (N. del T. persona
            </p>
          </Block>
        </Block>
      ) : null}
    </>,
    document.getElementById('modal')
  );
};
