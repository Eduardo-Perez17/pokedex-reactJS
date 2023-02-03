import { useTypeIcon } from '../custom/TypeIcon/useTypeIcon';
import { useTypeBackground } from '../custom/TypeBackground/useTypeBackground';
import { useHeaderArticleData } from '../custom/HeaderArticleData/useHeaderArticleData';
import { ICON_TOP } from '../utils/images';

import '../assets/styles/index.css';
import '../assets/styles/pokemonArticle.css';

import { HeaderArticle } from '../components/HeaderArticle';
import { WavesDesign } from '../components/WavesDesign';
import { Article } from '../components/Article';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Link } from '../components/Link';
import { Image } from '../components/Image';
import { Layaout } from '../Layaout';

const Aplication = () => {
  const [pokemonRandom, pokemonRandomAbility, errorFetchData, errorNotification, resolveDataAPI] =
    useHeaderArticleData();

  const [typePokemon] = useTypeIcon(pokemonRandom?.types);
  const [typeBackground] = useTypeBackground(typePokemon);
  return (
    <>
      <Layaout designGrid={typeBackground ? `${typeBackground}_background header` : 'header_default header'}>
        <Header pokemonRandom={pokemonRandom} idHeader='header' />
        <HeaderArticle
          pokemonRandom={pokemonRandom}
          pokemonRandomAbility={pokemonRandomAbility}
          errorFetchData={errorFetchData}
          errorNotification={errorNotification}
          resolveDataAPI={resolveDataAPI}
        />
      </Layaout>
      <WavesDesign />
      <Layaout designGrid='article'>
        <Article />
        <Footer />
      </Layaout>
      <Link linkDesign='main-top' hook='#header'>
        <Image image={ICON_TOP.image} alternativeText={ICON_TOP.alt} />
      </Link>
    </>
  );
};

export default Aplication;
