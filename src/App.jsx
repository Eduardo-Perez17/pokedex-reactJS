import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HOME, DETAILS, FAVORITE, NOT_FOUND } from './utils/path';
import { DataPokemonDetails } from './context/dataPokemonDetails/DataPokemonProvider';

import { Pokedex } from './Pokedex';
import { LayaoutOtherPageApp } from './LayaoutOtherPageApp';
import { Details } from './pages/Details';
import { Favorite } from './pages/Favorite';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <DataPokemonDetails>
        <Routes>
          <Route path={HOME.path} element={<Pokedex />} />
          <Route path={HOME.path} element={<LayaoutOtherPageApp />}>
            <Route path={DETAILS.path} element={<Details />} />
            <Route path={FAVORITE.path} element={<Favorite />} />
          </Route>
          <Route path={NOT_FOUND.path} element={<NotFound />} />
        </Routes>
      </DataPokemonDetails>
    </BrowserRouter>
  );
}

export default App;
