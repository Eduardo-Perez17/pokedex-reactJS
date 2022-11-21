import { useState, useEffect } from 'react';
import { icons } from '../utils/constants/constant';

const useTypeIcon = data => {
  const [typePokemon, setTypePokemon] = useState([]);

  useEffect(() => {
    const typesPokemon = [];

    data.map(type => typesPokemon.push({ image: icons[type.type.name], style: type.type.name }));
    setTypePokemon(typesPokemon);
  }, [data]);

  return [typePokemon];
};

export default useTypeIcon;
