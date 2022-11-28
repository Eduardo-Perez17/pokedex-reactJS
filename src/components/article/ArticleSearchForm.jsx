import { useState } from 'react';
import { dataPokemon } from '../../services/callAllPokemon';

import { Button } from '../Button';
import { Input } from '../Input';
import { Image } from '../Image';

import search from '../../assets/img/search.png';

export const ArticleSearchForm = ({ setPokemonValue }) => {
  const [inputPokemon, setInputPokemon] = useState('');

  const handleInputPokemon = e => setInputPokemon(e.target.value);

  const searchPokemonDataHandle = async e => {
    e.preventDefault();
    const urlSearch = `https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}`;
    const searchPokemon = await dataPokemon(urlSearch);
    setPokemonValue(searchPokemon);
  };

  return (
    <form className='form__search--pokemon main-form' onSubmit={searchPokemonDataHandle}>
      <Input typeInput='text' designInput='input' valueInput={inputPokemon} onChange={handleInputPokemon} />

      <Button typeButton='button' onClick={inputPokemon === '' ? null : searchPokemonDataHandle} designButton='button btn-article-pagination'>
        <Image image={search} alternativeText={search} designImage='search__btn' />
      </Button>
    </form>
  );
};
