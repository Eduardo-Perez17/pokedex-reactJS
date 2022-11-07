import { useState, useEffect } from 'react';
import { icons } from '../utils/constants/contant';

const useTypeIcon = () => {
  const [pokemonTypeIcon, setPokemonTypeIcon] = useState();
  const [typeIcon, setTypeIcon] = useState();

  useEffect(() => {
    setTypeIcon(icons[pokemonTypeIcon]);
  });

  return [setPokemonTypeIcon, typeIcon, pokemonTypeIcon];
};

export default useTypeIcon;
