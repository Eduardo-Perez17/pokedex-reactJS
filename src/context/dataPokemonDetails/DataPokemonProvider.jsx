import React from 'react';

const DataContext = React.createContext();

const DataPokemonDetails = ({ children }) => {
  const [pokemonDataProvider, setPokemonDataProvider] = React.useState(null);

  const dataProviderHandle = (dataResolve) => {
    setPokemonDataProvider(dataResolve);
  };

  const data = { pokemonDataProvider, dataProviderHandle };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const useData = () => {
  const dataResolveProvider = React.useContext(DataContext);
  return dataResolveProvider;
};

export { DataPokemonDetails, useData };
