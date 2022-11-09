import { useState, useEffect } from 'react';
import { resolveDataPokemons } from '../services/callAllPokemon';

import { PagePagination } from './PagePagination';
import { PokemonArticle } from './PokemonArticle';
import { Block } from './Block';

export const MainAllPokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [page, setPage] = useState(0);

  const callAllPokemonAPI = async () => {
    const allPokemon = await resolveDataPokemons(12, 12 * page);
    setPokemon(allPokemon);
  };

  useEffect(() => {
    callAllPokemonAPI();
  }, [page]);

  return (
    <>
      <PagePagination functionPage={setPage} page={page} />
      {pokemon ? (
        <Block designBlock='all__pokemon--article'>
          {pokemon.map(e => (
            <div key={e.id}>
              <PokemonArticle pokemonData={e} />
            </div>
          ))}
        </Block>
      ) : (
        <p>cargando....</p>
      )}
      <PagePagination functionPage={setPage} page={page} />
    </>
  );
};
