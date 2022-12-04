import { useState } from 'react';
import { dataPokemon } from '../../services/callAllPokemon';

import { ContainerParagraph } from '../ContainerParagraph';
import { Block } from '../Block';
import { Button } from '../Button';
import { Input } from '../Input';
import { Image } from '../Image';

import search from '../../assets/img/search.png';

export const ArticleSearchForm = ({ setPokemonValue }) => {
  const [inputPokemon, setInputPokemon] = useState('');
  const [searchError, setSearchError] = useState(false);

  const handleInputPokemon = e => setInputPokemon(e.target.value);

  const searchPokemonDataHandle = async e => {
    try {
      e.preventDefault();
      const urlSearch = `https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}`;
      const searchPokemon = await dataPokemon(urlSearch);
      setPokemonValue(searchPokemon);
      setSearchError(false);
    } catch {
      setSearchError(true);
    }
  };

  return (
    <>
      <form className='form__search--pokemon main-form' onSubmit={searchPokemonDataHandle}>
        <Input typeInput='text' designInput='input' valueInput={inputPokemon} onChange={handleInputPokemon} />
        <Button typeButton='button' onClick={inputPokemon === '' ? null : searchPokemonDataHandle} designButton='button btn-article-pagination'>
          <Image image={search} alternativeText={search} designImage='search__btn' />
        </Button>
      </form>
      {searchError ? (
        <Block designBlock='search__error'>
          <ContainerParagraph paragraph='This pokemon has not been found' />
        </Block>
      ) : null}
    </>
  );
};
