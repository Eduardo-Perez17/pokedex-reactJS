import React from 'react';
import { useSearchTypesPokemon } from '../../custom/SearchTypesPokemon/useSearchTypesPokemon';

import { PokemonTypeMainMap } from '../PokemonTypeMainMap';
import { Block } from '../Block';

const ArticleSearchTypesPokemon = () => {
  const [typesPokemonData] = useSearchTypesPokemon();

  const searchTypesHandle = (type) => {
    console.log(type);
  };

  return (
    <>
      {typesPokemonData && (
        <Block designBlock='search__type--main'>
          {typesPokemonData.results.map((nameType) => (
            <React.Fragment key={nameType.name}>
              <PokemonTypeMainMap typePokemon={nameType.name} eventSearchType={() => searchTypesHandle(nameType)} />
            </React.Fragment>
          ))}
        </Block>
      )}
    </>
  );
};

export default ArticleSearchTypesPokemon;
