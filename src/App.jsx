import { Header } from './components/Header';
import { HeaderArticle } from './components/HeaderArticle';
import { Article } from './components/Article';
import Slider from './components/Slider';
import Footer from './components/Footer';
import { Grid } from './components/Grid';
import { WavesDesign } from './components/WavesDesign';

import './assets/styles/index.css';

// todo descarga la extension Better Comments para que tengas mis comentarios en color
// * listo
// todo Busca en la lupa // todo para que te salga todos los comentarios que deje y los veas 1 a 1
// * Listo
// todo lo dejo aqui general porque si no te lleno el codigo de comentarios

// todo valida dentro de los componentes que te llega la info
// todo en caso de que no llegue la info muestra algo por default
// todo pero estas asomiendo que siempre te llega la data y eso esta mal
// todo simpre piensa que la data no te va a llegar

// todo maneja los errores

// todo usa loader mientras se hacen las peticiones

function App() {
  return (
    <>
      <Grid designGrid='header'>
        <Header />
        <HeaderArticle />
      </Grid>
      <WavesDesign />
      {/* // todo aqui tienes un codigo tan increible que hace millones de peticiones sin parar */}
      <Grid designGrid='article'>
        <Article />
      </Grid>
      <Slider />
      {/* // todo ya el mismo componente footer deberia de tener este div con clase footer internanmente */}
      <Grid designGrid='footer'>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
