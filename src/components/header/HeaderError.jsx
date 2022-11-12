import { Block } from '../Block';
import { Title } from '../Title';
import { ContainerParagraph } from '../ContainerParagraph';
import { Image } from '../Image';

import snorlax from '../../assets/img/header_not_found.png';

export const HeaderError = () => {
  return (
    <Block designBlock='header__error'>
      <Title title='Oops hubo un error...' />
      <ContainerParagraph paragraph='Parece que sucedio algo. Por favor actualice la pagina' />
      <Image image={snorlax} alternativeText={snorlax} designImage='header__error--image' />
    </Block>
  );
};
