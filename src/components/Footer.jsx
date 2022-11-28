import { Block } from './Block';
import { ContainerParagraph } from './ContainerParagraph';

import '../assets/styles/footer.css';

export const Footer = () => {
  return (
    <>
      <Block>
        <ContainerParagraph paragraph='Developer information' />
      </Block>
      <Block designBlock='footer-item'>
        <ContainerParagraph paragraph='Image rights to Nintendo and The Pokémon Company Data taken from API - pokeapi.co' />
      </Block>
    </>
  );
};
