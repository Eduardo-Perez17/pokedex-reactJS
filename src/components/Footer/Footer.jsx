import '../../assets/styles/footer.css';

import { ContainerParagraph } from '../ContainerParagraph';
import { Block } from '../Block';

const Footer = () => {
  return (
    <>
      <ContainerParagraph>Developer information</ContainerParagraph>
      <Block designBlock='footer-item'>
        <ContainerParagraph>
          Image rights to Nintendo and The Pokémon Company Data taken from API - pokeapi.co
        </ContainerParagraph>
      </Block>
    </>
  );
};

export default Footer;
