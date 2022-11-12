import React from 'react';
import ReactDOM from 'react-dom';

import { Block } from './Block';
import { Button } from '../components/Button';

import '../assets/styles/modal.css';

// ! ESTE COMPONENTE ESTA IMCOMPLENTO POR LO TANTO NO USE OTROS COMPONENTES Y TENGO PROBLEMAS DE ESTADO

export const ModalPokemon = () => {
  return ReactDOM.createPortal(
    <Block designBlock='modal'>
      <h1>Esto es un modal</h1>
      <p>no esta terminado</p>
      <Button typeButton='button' designButton='button header__details--button'>
        close
      </Button>
    </Block>,
    document.getElementById('modal')
  );
};
