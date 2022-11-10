import { Block } from './Block';
import { ContainerParagraph } from './ContainerParagraph';

import '../assets/styles/footer.css';

const Footer = () => {
  return (
    <>
    {/* // todo mas nunca quiero ver esta mierda de hr valorate */}
      <hr />
      <Block>
        {/* // todo tienes aqui un componente para renderizar un p y hay mucho p por ahi que no usan este componente */}
        <ContainerParagraph paragraph='Developer information' />
      </Block>
      <Block designBlock='footer-item'>
        <ContainerParagraph paragraph='Image rights to Nintendo and The Pokémon Company Data taken from API - pokeapi.co' />
      </Block>
    </>
  );
};

export default Footer;
