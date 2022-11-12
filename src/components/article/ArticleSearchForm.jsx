import { useState } from 'react';
import { dataPokemon } from '../../services/callAllPokemon';

import { Button } from '../Button';
import { Block } from '../Block';
import { Input } from '../Input';
import { Image } from '../Image';

import search from '../../assets/img/search.png';

// ! HACER EL 404 NOT FOUND

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
    <form className='form__search--pokemon' onSubmit={searchPokemonDataHandle}>
      {/* // todo para que tienes un div con un a clase si esta clase se la puedes dar al mismo form, no pongas etiquetas basuras */}
      <Block designBlock='main-form'>
        <Input typeInput='text' designInput='input' valueInput={inputPokemon} onChange={handleInputPokemon} />

        <Button typeButton='button' onClick={searchPokemonDataHandle} designButton='button btn-article-pagination'>
          <Image image={search} alternativeText={search} designImage='search__btn' />
        </Button>
      </Block>
    </form>
  );
};
