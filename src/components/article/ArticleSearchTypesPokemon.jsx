import React, { useEffect, useState } from 'react';
import { dataPokemon } from '../../services/callAllPokemon';

import { PokemonTypeMainMap } from './PokemonTypeMainMap';
import { Block } from '../Block';

// todo asi no se valida un array, un objecto vacio pasa esta validacion */
export const ArticleSearchTypesPokemon = () => {
  const [typesPokemonData, setTypesPokemonData] = useState();

  const resolveDataAPI = async () => {
    const urlAllData = `https://pokeapi.co/api/v2/type/`;
    const allData = await dataPokemon(urlAllData);
    setTypesPokemonData(allData);
  };

  useEffect(() => {
    resolveDataAPI();
  }, []);

  return (
    <>
      {typesPokemonData && (
        <Block designBlock='search__type--main'>
          {typesPokemonData.results.map(nameType => (
            <React.Fragment key={nameType.name}>
              <PokemonTypeMainMap typePokemon={nameType.name} />
            </React.Fragment>
          ))}
        </Block>
      )}
    </>
  );
};
