import { useState } from 'react';
import { dataPokemon } from '../services/callAllPokemon';

import { Button } from './Button';
import { Block } from './Block';
import { Input } from './Input';

import search from '../assets/img/search.png';

export const ArticleSearchForm = ({ setPokemonValue }) => {
  const [inputPokemon, setInputPokemon] = useState('');

  const handleInputPokemon = e => setInputPokemon(e.target.value);

  const searchPokemonDataHandle = async e => {
    e.preventDefault();
    const search_pokemon = await dataPokemon(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}`);
    setPokemonValue(search_pokemon);
  };

  return (
    <form className='form__search--pokemon' onSubmit={searchPokemonDataHandle}>
      <Block designBlock='main-form'>
        <Input typeInput='text' designInput='input' valueInput={inputPokemon} eventInput={handleInputPokemon} />
        <Button typeButton='button' designButton='button button__input--search-article' btnEvent={searchPokemonDataHandle} iconButton={search} iconButtonInfo={search} iconButtonStyle='search__btn' />
      </Block>
    </form>
  );
};
