import { Header } from './components/header/Header';
import { HeaderArticle } from './components/header/HeaderArticle';
import { WavesDesign } from './components/header/WavesDesign';
import { Article } from './components/article/Article';
import { Slider } from './components/article/Slider';
import { Footer } from './components/Footer';
import { Grid } from './components/Grid';

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
