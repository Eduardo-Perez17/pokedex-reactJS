import { motion } from 'framer-motion';
import { useTypeIcon } from '../custom/TypeIcon/useTypeIcon';
import { useTypeBackground } from '../custom/TypeBackground/useTypeBackground';
import { useHeaderArticleData } from '../custom/HeaderArticleData/useHeaderArticleData';
import { CONTAINER, ITEM } from '../utils/Animation';

import '../assets/styles/pokemonArticle.css';
import '../assets/styles/index.css';

import { HeaderArticle } from '../components/HeaderArticle';
import { WavesDesign } from '../components/WavesDesign';
import { ReturnTop } from '../components/ReturnTop';
import { Footer } from '../components/Footer';
import { Article } from '../components/Article';
import { Header } from '../components/Header';
import { Layaout } from '../Layaout';

const Pokedex = () => {
  const [pokemonRandom, pokemonRandomAbility, errorFetchData, errorNotification, resolveDataAPI] =
    useHeaderArticleData();

  const [typePokemon] = useTypeIcon(pokemonRandom?.types);
  const [typeBackground] = useTypeBackground(typePokemon);

  return (
    <>
      <Layaout designGrid={typeBackground ? `${typeBackground}_background header` : 'header_default header'}>
        <motion.div variants={CONTAINER} initial='hidden' animate='visible'>
          <Header pokemonRandom={pokemonRandom} idHeader='header' variants={ITEM} />
          <HeaderArticle
            pokemonRandom={pokemonRandom}
            pokemonRandomAbility={pokemonRandomAbility}
            errorFetchData={errorFetchData}
            errorNotification={errorNotification}
            resolveDataAPI={resolveDataAPI}
          />
        </motion.div>
      </Layaout>
      <WavesDesign />
      <Layaout designGrid='article'>
        <Article />
        {/* <Aside /> */}
        <Footer />
      </Layaout>
      <ReturnTop />
    </>
  );
};

export default Pokedex;
