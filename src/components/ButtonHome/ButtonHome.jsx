import { ICON_HOME } from '../../utils/images';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/dataPokemonDetails/DataPokemonProvider';

import { Button } from '../Button';
import { Image } from '../Image';

const ButtonHome = () => {
  const navigate = useNavigate();
  const { dataProviderHandle } = useData();

  const dataReset = () => {
    dataProviderHandle();
    navigate('/');
  };

  return (
    <Button onClickEvent={dataReset} designButton='main-top button button__home--details'>
      <Image image={ICON_HOME.image} alternativeText={ICON_HOME.alt} />
    </Button>
  );
};

export default ButtonHome;
