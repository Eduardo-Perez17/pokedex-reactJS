import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HOME, DETAILS, FAVORITE, NOT_FOUND } from './utils/path';

import { Pokedex } from './Pokedex';
import { Details } from './pages/Details';
import { Favorite } from './pages/Favorite';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME.path} element={<Pokedex />} />
        <Route path={DETAILS.path} element={<Details />} />
        <Route path={FAVORITE.path} element={<Favorite />} />
        <Route path={NOT_FOUND.path} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
