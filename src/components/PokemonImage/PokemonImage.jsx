import { Link } from 'react-router-dom';
import { DETAILS } from '../../utils/path';

import { Image } from '../Image';

const PokemonImage = ({ pokeImage, pokeImageStyle, newDataProvider }) => {
  return (
    <Link to={DETAILS.path}>
      <Image
        image={pokeImage.sprites.other.home.front_default}
        designImage={pokeImageStyle}
        eventImage={newDataProvider}
      />
    </Link>
  );
};

export default PokemonImage;
