import { useState } from 'react';

import '../../assets/styles/article.css';

import { ArticleSearchTypesPokemon } from '../ArticleSearchTypesPokemon';
import { ContainerParagraph } from '../ContainerParagraph';
import { ArticleSearchForm } from '../ArticleSearchForm';
import { PokemonArticle } from '../PokemonArticle';
import { MainAllPokemon } from '../MainAllPokemon';
import { Block } from '../Block';
import { Title } from '../Title';

const Article = () => {
  const [pokemonSearch, setPokemonSearch] = useState();

  return (
    <Block designBlock='article-main'>
      <Title size='lg'>Search for types</Title>
      <Block designBlock='search__article'>
        <ArticleSearchTypesPokemon />
        <Block designBlock='form__serch'>
          <ContainerParagraph designContainerParagraph='type__writer'>search for id or name</ContainerParagraph>
          <ArticleSearchForm setPokemonValue={setPokemonSearch} />
        </Block>
      </Block>
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

export default Article;
