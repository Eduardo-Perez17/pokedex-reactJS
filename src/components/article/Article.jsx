import { useState } from 'react';
import { ICON_HOME } from '../../utils/images';
import { useSearchPokemonData } from '../../custom/SearchPokemonData/useSearchPokemonData';

import '../../assets/styles/article.css';

// import { ArticleSearchTypesPokemon } from '../ArticleSearchTypesPokemon';
import { ContainerParagraph } from '../ContainerParagraph';
import { ArticleSearchForm } from '../ArticleSearchForm';
import { PokemonArticle } from '../PokemonArticle';
import { MainAllPokemon } from '../MainAllPokemon';
import { Button } from '../Button';
import { Image } from '../Image';
import { Block } from '../Block';
import { Title } from '../Title';

const Article = () => {
  const [inputPokemon, setInputPokemon] = useState('');
  const [pokemonSearch, searchError, searchPokemonDataHandle, setPokemonSearch] = useSearchPokemonData(inputPokemon);

  const handleInputPokemon = (e) => setInputPokemon(e.target.value);
  const handleReturnHome = () => setPokemonSearch();

  return (
    <>
      <Block designBlock='article-main'>
        <Title size='lg'>Pokemon Search</Title>
        <Block designBlock='search__article'>
          {/* <ArticleSearchTypesPokemon /> */}
          <Block designBlock='form__serch'>
            <ContainerParagraph designContainerParagraph='type__writer'>search for id or name</ContainerParagraph>
            <ArticleSearchForm
              handleInputPokemon={handleInputPokemon}
              searchPokemonDataHandle={searchPokemonDataHandle}
              searchError={searchError}
            />
          </Block>
          <Button designButton='button button__home' onClickEvent={handleReturnHome}>
            <Image image={ICON_HOME.image} alternativeText={ICON_HOME.alt} />
            Home
          </Button>
        </Block>
        {pokemonSearch ? (
          <Block designBlock='pokemon-article'>
            <PokemonArticle pokemonData={pokemonSearch} />
          </Block>
        ) : (
          <MainAllPokemon home={pokemonSearch} />
        )}
      </Block>
    </>
  );
};

export default Article;
