import { motion } from 'framer-motion';
import { APP_LOGO, LOGO_INSTAGRAM, LOGO_GITHUB } from '../../utils/images';
import { URL_SOCIAL } from '../../utils/endpoints';
import '../../assets/styles/header.css';

import { Link } from '../Link';
import { Image } from '../Image';
import { Block } from '../Block';

const Header = ({ idHeader, variants }) => {
  return (
    <motion.div className='block header-son' id={idHeader} variants={variants}>
      <Image image={APP_LOGO.image} alternativeText={APP_LOGO.alt} designImage='header__logo image' />
      <Block designBlock='header__icon'>
        <Link hook={URL_SOCIAL.instagram} targetValue='_blank' relValue='noreferrer'>
          <Image image={LOGO_INSTAGRAM.image} alternativeText={LOGO_INSTAGRAM.alt} designImage='header__icon--item' />
        </Link>
        <Link hook={URL_SOCIAL.gitHub} targetValue='_blank' relValue='noreferrer'>
          <Image image={LOGO_GITHUB.image} alternativeText={LOGO_GITHUB.alt} designImage='header__icon--item' />
        </Link>
      </Block>
    </motion.div>
  );
};

export default Header;
