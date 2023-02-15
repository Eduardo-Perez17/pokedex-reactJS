import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { APP_LOGO, LOGO_GITHUB } from '../../utils/images';
import { URL_SOCIAL } from '../../utils/endpoints';
import { HOME, FAVORITE } from '../../utils/path';

import '../../assets/styles/header.css';

import { LinkHook } from '../LinkHook';
import { Image } from '../Image';
import { Block } from '../Block';

const Header = ({ idHeader, variants }) => {
  return (
    <motion.div className='block header-son' id={idHeader} variants={variants}>
      <Link to={HOME.path}>
        <Image image={APP_LOGO.image} alternativeText={APP_LOGO.alt} designImage='header__logo image' />
      </Link>
      <Block designBlock='header__icon'>
        <Link to={FAVORITE.name}>{FAVORITE.name}</Link>
        {/* <LinkHook hook={URL_SOCIAL.instagram} targetValue='_blank' relValue='noreferrer'>
          <Image image={LOGO_INSTAGRAM.image} alternativeText={LOGO_INSTAGRAM.alt} designImage='header__icon--item' />
        </LinkHook> */}
        <LinkHook hook={URL_SOCIAL.gitHub} targetValue='_blank' relValue='noreferrer'>
          <Image image={LOGO_GITHUB.image} alternativeText={LOGO_GITHUB.alt} designImage='header__icon--item' />
        </LinkHook>
      </Block>
    </motion.div>
  );
};

export default Header;
