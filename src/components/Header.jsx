import { Image } from './Image';
import { Block } from './Block';

import logo from '../assets/img/pokebola.png';
import instagram from '../assets/img/instagram.png';
import github from '../assets/img/github.png';

import '../assets/styles/header.css';

export const Header = () => {
  return (
    <Block designBlock='block header-son'>
      <Image
        image={logo}
        alternativeText={logo}
        designImage='header__logo image'
      />
      <Block designBlock='header__icon'>
        <Image
          image={instagram}
          alternativeText={instagram}
          designImage='header__icon--item'
        />
        <Image
          image={github}
          alternativeText={github}
          designImage='header__icon--item'
        />
      </Block>
    </Block>
  );
};
