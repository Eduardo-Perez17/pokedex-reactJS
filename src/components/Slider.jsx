import React, { useState, useEffect } from 'react';
import { resolveDataPokemons } from '../services/callAllPokemon';
import '../assets/styles/slice.css';

import PokemonSlider from './PokemonSlider';
import { Block } from './Block';

const Slider = () => {
  // todo "setall" la "a" va en mayuscula
  const [allPokemonSlider, setallPokemonSlider] = useState();

  // todo try y loader
  const data = async () => {
    const item = await resolveDataPokemons(5, 450);
    setallPokemonSlider(item);
  };

  useEffect(() => {
    data();
  }, []);

  // todo no tiene sentido que uses react fragment si igual tiene 1 elemento
  return (
    <>
      <Block designBlock='slice-main'>
        <Block designBlock='slice__main--item'>
          {/* // todo asi no se valida un array un objeto vacio entra en esta validacion */}
          {allPokemonSlider ? (
            // todo "e" no me dice nada sobre lo que estas iterando
            allPokemonSlider.map(e => (
              // todo tienes un componente para los div y no lo usas
              <div key={e.id} className='slice__content--item'>
                <PokemonSlider pokemon={e} />
              </div>
            ))
          ) : (
            // todo que loader mas asqueroso
            <p>cargando...</p>
          )}
        </Block>
      </Block>
    </>
  );
};

export default Slider;
