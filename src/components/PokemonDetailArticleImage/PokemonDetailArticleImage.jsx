import React, { useState, useEffect } from 'react';
import { Image } from '../Image';

const PokemonDetailArticleImage = ({ pokemonData }) => {
  const [images, setImages] = useState([]);
  const dataImage = pokemonData.sprites.versions;

  useEffect(() => {
    setImages([
      dataImage['generation-i'].yellow.front_default,
      dataImage['generation-i']['red-blue'].front_default,
      dataImage['generation-ii'].crystal.front_default,
      dataImage['generation-ii'].gold.front_default,
      dataImage['generation-ii'].silver.front_default,
      dataImage['generation-iv']['diamond-pearl'].front_default,
      dataImage['generation-iv']['heartgold-soulsilver'].front_default,
      dataImage['generation-iv'].platinum.front_default,
      dataImage['generation-v']['black-white'].front_default,
      dataImage['generation-v']['black-white'].animated.front_default,
      dataImage['generation-vi']['omegaruby-alphasapphire'].front_default,
      dataImage['generation-vi']['x-y'].front_default,
      dataImage['generation-vii']['ultra-sun-ultra-moon'].front_default,
    ]);
  }, []);

  return (
    <>
      {images.map((image) => (
        <React.Fragment key={image}>
          <Image image={image} alternativeText={image} />
        </React.Fragment>
      ))}
    </>
  );
};

export default PokemonDetailArticleImage;
