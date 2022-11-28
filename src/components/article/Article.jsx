import { useState } from 'react';

import { ArticleSearchTypesPokemon } from './ArticleSearchTypesPokemon';
import { ContainerParagraph } from '../ContainerParagraph';
import { PokemonArticle } from '../article/PokemonArticle';
import { MainAllPokemon } from '../article/MainAllPokemon';
import { ArticleSearchForm } from './ArticleSearchForm';
import { Block } from '../Block';
import { Title } from '../Title';

import '../../assets/styles/article.css';

// ! TERMINAR EL BOTON DE HOME
// ! FILTER POKEMONES

export const Article = () => {
  const [pokemonSearch, setPokemonSearch] = useState();

  return (
    <Block designBlock='article-main'>
      <Title>
        <h2>Search for types</h2>
      </Title>
      <Block designBlock='search__article'>
        <ArticleSearchTypesPokemon />
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
