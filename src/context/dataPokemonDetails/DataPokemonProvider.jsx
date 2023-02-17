import React from 'react';

const DataContext = React.createContext();

const DataPokemonDetails = ({ children }) => {
  const [pokemonDataProvider, setPokemonDataProvider] = React.useState(null);
  const [pokemonFavorite, setPokemonFavorite] = React.useState([]);
  const allPokemonsFavorite = [...pokemonFavorite];

  const dataProviderHandle = (dataResolve) => setPokemonDataProvider(dataResolve);

  const dataFavoritePokemon = (dataFavorite) => {
    allPokemonsFavorite.push(dataFavorite);
    setPokemonFavorite(allPokemonsFavorite);
  };

  const data = { pokemonDataProvider, dataProviderHandle, pokemonFavorite, dataFavoritePokemon, setPokemonFavorite };

  localStorage.setItem('pokemon', JSON.stringify(pokemonFavorite));
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const useData = () => {
  const dataResolveProvider = React.useContext(DataContext);
  return dataResolveProvider;
};

export { DataPokemonDetails, useData };
