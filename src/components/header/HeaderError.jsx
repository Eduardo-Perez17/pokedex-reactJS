import { Block } from '../Block';
import { Title } from '../Title';
import { ContainerParagraph } from '../ContainerParagraph';
import { Image } from '../Image';

import snorlax from '../../assets/img/header_not_found.png';

export const HeaderError = () => {
  return (
    <Block designBlock='header__error'>
      <Title>
        <h1>Oops there was a mistake...</h1>
      </Title>
      <ContainerParagraph paragraph='It seems that something happened. Please refresh the page' />
      <Image image={snorlax} alternativeText={snorlax} designImage='header__error--image' />
    </Block>
  );
};
