import { useState } from 'react';
import { IMAGE_INFO } from '../../utils/images';

import { ModalPokemon } from '../ModalPokemon';
import { Button } from '../Button';
import { Image } from '../Image';
import { Block } from '../Block';

const Details = ({ dataPokemon }) => {
  const [modalPokemon, setModalPokemon] = useState(false);
  const [validationMoreDetails, setValidationMoreDetails] = useState(false);

  const handleModal = () => {
    setModalPokemon(!modalPokemon);
    setValidationMoreDetails(!validationMoreDetails);
  };

  return (
    <Block designBlock='header__details'>
      <Button typeButton='button' designButton='button header__details--button' onClickEvent={handleModal}>
        <Image image={IMAGE_INFO.image} alternativeText={IMAGE_INFO.alt} designImage='icon icon__button--header' />
        more details
      </Button>

      {modalPokemon && (
        <ModalPokemon
          handdleModalOpen={handleModal}
          modalOpen={modalPokemon}
          dataPokemon={dataPokemon}
          validationMoreDetails={validationMoreDetails}
        />
      )}
    </Block>
  );
};

export default Details;
