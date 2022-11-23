import { Image } from '../Image';
import { Block } from '../Block';

import logo from '../../assets/img/pokebola.png';
import instagram from '../../assets/img/instagram.png';
import github from '../../assets/img/github.png';

import '../../assets/styles/header.css';

export const Header = () => {
  return (
    <Block designBlock='block header-son'>
      <Image image={logo} alternativeText={logo} designImage='header__logo image' />
      <Block designBlock='header__icon'>
        <a href='https://www.instagram.com/srperez23/' target='_blank'>
          <Image image={instagram} alternativeText={instagram} designImage='header__icon--item' />
        </a>
        <a href='https://github.com/Eduardo-Perez17?tab=repositories' target='_blank'>
          <Image image={github} alternativeText={github} designImage='header__icon--item' />
        </a>
      </Block>
    </Block>
  );
};
