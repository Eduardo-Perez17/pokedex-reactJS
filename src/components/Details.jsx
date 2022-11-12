import { ModalPokemon } from './ModalPokemon';
import { Image } from './Image';
import { Block } from './Block';
import { Button } from './Button';

import info from '../assets/img/info.png';

// todo si este componente se va a encargar tambien de mostrar el modal, su stado lo tiene que manejar el mismo y no el padre
// todo pero esta raro porque aqui no le llega la data pero como tienes esto incompleto no veras el error que tienes
export const Details = ({ stateModal, validationModal }) => {
  return (
    <Block designBlock='header__details'>
      <Button
        typeButton='button'
        designButton='button header__details--button'
        text='more details'
        onClick={validationModal}
        iconButton={info}
        iconButtonInfo={info}
        iconButtonStyle='icon__button--header info__icon--btn'
      >
        more details
        <Image image={info} alternativeText={info} designImage='icon icon__button--header' />
      </Button>
      {stateModal && <ModalPokemon />}
    </Block>
  );
};
