import { useEffect, useState } from 'react';
import { dataPokemon } from '../services/callAllPokemon';

import { PokemonTypeMainMap } from './PokemonTypeMainMap';
import { Block } from './Block';

export const ArticleSearchTypesPokemon = () => {
  const [typesPokemonData, setTypesPokemonData] = useState();

  const resolveDataAPI = async () => {
    const all_data = await dataPokemon(`https://pokeapi.co/api/v2/type/`);
    setTypesPokemonData(all_data);
  };

  useEffect(() => {
    resolveDataAPI();
  });

  return (
    <>
      {typesPokemonData && (
        <Block designBlock='search__type--main'>
          {typesPokemonData.results.map(e => (
            <div key={e.name}>
              <PokemonTypeMainMap iterable={e.name} />
            </div>
          ))}
        </Block>
      )}
    </>
  );
};
