import { useState } from 'react';

import { ModalPokemon } from './ModalPokemon';
import { Button } from './Button';
import { Image } from './Image';
import { Block } from './Block';

import info from '../assets/img/info.png';

export const Details = () => {
  const [modalPokemon, setModalPokemon] = useState(false);
  const handleModal = () => setModalPokemon(!modalPokemon);

  return (
    <Block designBlock='header__details'>
      <Button typeButton='button' designButton='button header__details--button' onClick={handleModal}>
        more details
        <Image image={info} alternativeText={info} designImage='icon icon__button--header' />
      </Button>
      {modalPokemon && <ModalPokemon />}
    </Block>
  );
};
