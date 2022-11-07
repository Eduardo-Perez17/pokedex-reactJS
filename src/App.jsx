import { Header } from './components/Header';
import { HeaderArticle } from './components/HeaderArticle';
import { Article } from './components/Article';
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
    </>
  );
}

export default App;
