import { useState, useEffect } from 'react';
import { resolveDataPokemons } from '../../services/callAllPokemon';

import { LoaderHeader } from '../loaders/LoaderHeader';
import { ErrorNotification } from '../ErrorNotification';
import { PokemonSlider } from './PokemonSlider';
import { Block } from '../Block';

import '../../assets/styles/slice.css';

// todo asi no se valida un array un objeto vacio entra en esta validacion */
export const Slider = () => {
  const [allPokemonSlider, setAllPokemonSlider] = useState();
  const [error, setError] = useState(false);

  const data = async () => {
    try {
      const item = await resolveDataPokemons(5, 450);
      setAllPokemonSlider(item);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <Block designBlock='slice-main'>
      <Block designBlock='slice__main--item'>
        {error && <ErrorNotification />}
        {allPokemonSlider ? (
          allPokemonSlider.map(dataPokemon => (
            <Block key={dataPokemon.id} designBlock='slice__content--item'>
              <PokemonSlider pokemon={dataPokemon} />
            </Block>
          ))
        ) : (
          <LoaderHeader />
        )}
      </Block>
    </Block>
  );
};
