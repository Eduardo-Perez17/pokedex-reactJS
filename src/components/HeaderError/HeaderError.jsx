import { IMAGE_SNORLAX } from '../../utils/images';

import { ContainerParagraph } from '../ContainerParagraph';
import { Block } from '../Block';
import { Title } from '../Title';
import { Image } from '../Image';

const HeaderError = () => {
  return (
    <Block designBlock='header__error'>
      <Title size='xl'>Oops there was a mistake...</Title>
      <ContainerParagraph paragraph='It seems that something happened. Please refresh the page' />
      <Image image={IMAGE_SNORLAX.image} alternativeText={IMAGE_SNORLAX.alt} designImage='header__error--image' />
    </Block>
  );
};

export default HeaderError;
