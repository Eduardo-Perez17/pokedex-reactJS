import React, { useState } from 'react';
import { iconSlice } from '../utils/constants/contant';

import { Block } from './Block';
import { Title } from './Title';
import { ContainerParagraph } from './ContainerParagraph';
import { Image } from './Image';
import { Button } from './Button';

const PokemonSlider = ({ pokemon }) => {
  const imageFront = pokemon.sprites.versions['generation-v']['black-white'].animated['front_default'];
  const imageBack = pokemon.sprites.versions['generation-v']['black-white'].animated['back_default'];

  const [imagePokemon, setImagePokemon] = useState(imageFront);

  const handleImageRotateLeft = () => setImagePokemon(imageBack);
  const handleImageRotateRight = () => setImagePokemon(imageFront);

  return (
    <Block designBlock='pokemon__slider'>
      <Title title={pokemon.name} />
      <Block designBlock='pokemon__info'>
        <ContainerParagraph paragraph={`#${pokemon.id}`} />
        <ContainerParagraph paragraph={`Base Experience ${pokemon.base_experience} pts`} />
        <ContainerParagraph paragraph={`Especie ${pokemon.species.name}`} />
      </Block>
      <Block designBlock='main__pokemon--img'>
        <Button typeButton='button' btnEvent={handleImageRotateRight} designButton='button__slice--img button' iconButton={iconSlice.left} iconButtonStyle='icon__button--slider' />
        <Image image={imagePokemon} alternativeText={imagePokemon} designImage='pokemon__slider--img' />
        <Button typeButton='button' btnEvent={handleImageRotateLeft} designButton='button__slice--img button' iconButton={iconSlice.rigth} iconButtonStyle='icon__button--slider' />
      </Block>
    </Block>
  );
};

export default PokemonSlider;
