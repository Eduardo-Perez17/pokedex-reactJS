import { useState, useEffect } from 'react';

export const useTypeBackground = (typePokemon) => {
  const [typeBackground, setTypeBackground] = useState('');

  useEffect(() => {
    typePokemon.forEach((typePokemon) => setTypeBackground(typePokemon.style));
  }, [typePokemon]);

  return [typeBackground];
};
