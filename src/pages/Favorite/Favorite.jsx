import React, { useState, useEffect } from 'react';
// import { useData } from '../../context/dataPokemonDetails/DataPokemonProvider';
import { ICON_FAVORITE_IMG } from '../../utils/images';

import './favorite.css';

import { ContainerParagraph } from '../../components/ContainerParagraph';
import { PokemonArticle } from '../../components/PokemonArticle';
import { ButtonHome } from '../../components/ButtonHome';
import { ReturnTop } from '../../components/ReturnTop';
import { Block } from '../../components/Block';
import { Image } from '../../components/Image';

const Favorite = () => {
  const [pokemonLocalStorage, setPokemonLocalStorage] = useState();
  // const { pokemonFavorite } = useData();

  useEffect(() => {
    const pokemonsStorage = JSON.parse(localStorage.getItem('pokemon'));
    setPokemonLocalStorage(pokemonsStorage);
  }, []);

  return (
    <Block designBlock='favorite-main'>
      <Block designBlock='favorite__img'>
        <Image image={ICON_FAVORITE_IMG.image} alternativeText={ICON_FAVORITE_IMG.alt} />
        <ContainerParagraph>Guarda tus pokemones favoritos, visitalos en cualquier momento.</ContainerParagraph>
      </Block>
      {pokemonLocalStorage && (
        <Block designBlock='favorite__pokemon'>
          {pokemonLocalStorage.map((pokemon) => (
            <React.Fragment key={pokemon.id}>
              <PokemonArticle pokemonData={pokemon} />
            </React.Fragment>
          ))}
        </Block>
      )}
      <ButtonHome />
      <ReturnTop />
    </Block>
  );
};

export default Favorite;
