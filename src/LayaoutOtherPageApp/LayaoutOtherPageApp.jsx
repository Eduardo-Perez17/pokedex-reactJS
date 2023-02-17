import { useTypeIcon } from '../custom/TypeIcon/useTypeIcon';
import { useTypeBackground } from '../custom/TypeBackground/useTypeBackground';
import { useData } from '../context/dataPokemonDetails/DataPokemonProvider';

import { Outlet } from 'react-router-dom';

import './layaoutOtherPageApp.css';
import '../assets/styles/pokemonArticle.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Block } from '../components/Block';
import { Layaout } from '../Layaout';

const LayaoutOtherPageApp = () => {
  const { pokemonDataProvider } = useData();
  const [typePokemon] = useTypeIcon(pokemonDataProvider?.types);
  const [typeBackground] = useTypeBackground(typePokemon);

  return (
    <Layaout designGrid={`${typeBackground}_background`}>
      <Block designBlock='main__other--page details-container favorite-container'>
        <Header />
        <Outlet />
        <Footer />
      </Block>
    </Layaout>
  );
};

export default LayaoutOtherPageApp;
