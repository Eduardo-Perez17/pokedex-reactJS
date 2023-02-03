import '../../assets/styles/footer.css';

import { Header } from '../Header';
import { Block } from '../Block';

const Footer = () => {
  return (
    <>
      <Header />
      <Block designBlock='footer-item'>
        <span>Image rights to Nintendo and The Pokémon Company Data taken from API - pokeapi.co</span>
        <span>© Copyright Eduardo Perez. All rights reserved</span>
      </Block>
    </>
  );
};

export default Footer;
