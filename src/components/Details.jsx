import { ModalPokemon } from './ModalPokemon';
import { Block } from './Block';
import { Button } from './Button';
import info from '../assets/img/info.png';

export const Details = ({ stateModal, validationModal }) => {
  return (
    <Block designBlock='header__details'>
      <Button
        typeButton='button'
        designButton='button header__details--button'
        text='more details'
        btnEvent={validationModal}
        iconButton={info}
        iconButtonInfo={info}
        iconButtonStyle='icon__button--header info__icon--btn'
      />
      {stateModal ? <ModalPokemon /> : null}
    </Block>
  );
};
