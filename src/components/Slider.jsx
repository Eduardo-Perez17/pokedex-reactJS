import React, { useState, useEffect } from 'react';
import { resolveDataPokemons } from '../services/callAllPokemon';
import PokemonSlider from './PokemonSlider';
import '../assets/styles/slice.css';
import { Block } from './Block';
import { iconSlice } from '../utils/constants/contant';

const Slider = () => {
  const [allPokemonSlider, setallPokemonSlider] = useState();

  const data = async () => {
    const item = await resolveDataPokemons(5, 450);
    setallPokemonSlider(item);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <Block designBlock='slice-main'>
        <Block designBlock='slice__main--item'>
          {allPokemonSlider ? (
            allPokemonSlider.map(e => (
              <div key={e.id} className='slice__content--item'>
                <PokemonSlider pokemon={e} />
              </div>
            ))
          ) : (
            <p>cargando...</p>
          )}
        </Block>
      </Block>
    </>
  );
};

export default Slider;
