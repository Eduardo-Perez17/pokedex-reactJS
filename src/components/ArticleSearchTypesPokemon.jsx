import { useEffect, useState } from 'react';
import { dataPokemon } from '../services/callAllPokemon';

import { PokemonTypeMainMap } from './PokemonTypeMainMap';
import { Block } from './Block';
import { ContainerParagraph } from './ContainerParagraph';

export const ArticleSearchTypesPokemon = () => {
  // ! COLOCAR ICONOS DE LOS TYPES

  const [typesPokemonData, setTypesPokemonData] = useState();

  const resolveDataAPI = async () => {
    const all_data = await dataPokemon(`https://pokeapi.co/api/v2/type/`);
    setTypesPokemonData(all_data);
  };

  const filterType = tipo => console.log('Filtramos por : ' + tipo);

  useEffect(() => {
    resolveDataAPI();
  });

  return (
    <>
      {typesPokemonData ? (
        <>
          <Block designBlock='search__type--main'>
            {typesPokemonData.results.map(e => (
              <div key={e.name} onClick={() => filterType(e.name)}>
                <PokemonTypeMainMap iterable={e.name} />
              </div>
            ))}
          </Block>
        </>
      ) : (
        <ContainerParagraph paragraph='Cargando Tipos' />
      )}
    </>
  );
};
