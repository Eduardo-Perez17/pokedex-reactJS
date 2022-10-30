import { useState } from 'react';

import { ArticleSearchTypesPokemon } from './ArticleSearchTypesPokemon';
import { ArticleSearchForm } from './ArticleSearchForm';
import { ContainerParagraph } from './ContainerParagraph';
import { PokemonArticle } from './PokemonArticle';
import { MainAllPokemon } from './MainAllPokemon';
import { Button } from './Button';
import { Block } from './Block';
import { Title } from './Title';

import '../assets/styles/article.css';

// ! HACER EL 404 NOT FOUND

// ! FILTER ANTES DE HACER EL LLAMADO A TODOS LOS POKEMONES

export const Article = () => {
  const [pokemonSearch, setPokemonSearch] = useState();

  return (
    <Block designBlock='article-main'>
      <Button typeButton='button' text='home' btnEvent />
      <Title title='Search for types' />
      <Block designBlock='search__article'>
        <Block>
          <ArticleSearchTypesPokemon />
        </Block>
        <Block designBlock='form__serch'>
          <ContainerParagraph designContainerParagraph='type__writer' paragraph='search for id or name' />
          <ArticleSearchForm setPokemonValue={setPokemonSearch} />
        </Block>
      </Block>
      <hr />
      {pokemonSearch ? (
        <Block designBlock='pokemon-article'>
          <PokemonArticle pokemonData={pokemonSearch} />
        </Block>
      ) : (
        <MainAllPokemon />
      )}
    </Block>
  );
};
