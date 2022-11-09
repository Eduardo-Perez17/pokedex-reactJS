import { Header } from './components/Header';
import { HeaderArticle } from './components/HeaderArticle';
import { Article } from './components/Article';
import Slider from './components/Slider';
import Footer from './components/Footer';
import { Grid } from './components/Grid';
import { WavesDesign } from './components/WavesDesign';

import './assets/styles/index.css';

function App() {
  return (
    <>
      <Grid designGrid='header'>
        <Header />
        <HeaderArticle />
      </Grid>
      <WavesDesign />
      <Grid designGrid='article'>
        <Article />
      </Grid>
      <Slider />
      <Grid designGrid='footer'>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
