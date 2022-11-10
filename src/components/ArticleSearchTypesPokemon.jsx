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

  // todo este useEffect se esta ejecutando de manera infinita y no te diste cuenta porque seguro no miraste el network y eso esta mal
  useEffect(() => {
    resolveDataAPI();
  }, []);

  return (
    <>
    {/* // todo asi no se valida un array, un objecto vacio pasa esta validacion */}
      {typesPokemonData && (
        <Block designBlock='search__type--main'>
          {/* // todo "e" no me dice nada sobre lo que se esta iterando */}
          {typesPokemonData.results.map(e => (
            // todo no estas usando tu componente para el div
            // todo si pones un div solo para la key usa <React.Fragment> y le pasas la key
            <div key={e.name}>
              <PokemonTypeMainMap iterable={e.name} />
            </div>
          ))}
        </Block>
      )}
    </>
  );
};
