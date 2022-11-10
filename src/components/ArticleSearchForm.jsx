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
    // todo usa variable de entorno para las base_api
    const search_pokemon = await dataPokemon(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}`);
    setPokemonValue(search_pokemon);
  };

  return (
    <form className='form__search--pokemon' onSubmit={searchPokemonDataHandle}>
      {/* // todo para que tienes un div con un a clase si esta clase se la puedes dar al mismo form, no pongas etiquetas basuras */}
      <Block designBlock='main-form'>
        {/* // todo la prop "eventInput" no me dice que hace, tiene que llamarse como lo que es un onChange, onBlur, onFocus, etc */}
        <Input typeInput='text' designInput='input' valueInput={inputPokemon} eventInput={handleInputPokemon} />

        {/* // todo la prop "btnEvent" no me dice nada sobre lo que hace. Es un onClick? onFocus? onQue ? */}
        <Button typeButton='button' designButton='button button__input--search-article' btnEvent={searchPokemonDataHandle} iconButton={search} iconButtonInfo={search} iconButtonStyle='search__btn' />
      </Block>
    </form>
  );
};
