import React, { useState, useEffect } from 'react';
import { resolveDataPokemons } from '../../services/callAllPokemon';

import { LoaderHeader } from '../loaders/LoaderHeader';
import { PagePagination } from './PagePagination';
import { PokemonArticle } from './PokemonArticle';
import { Block } from '../Block';

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
            <React.Fragment key={e.id}>
              <PokemonArticle pokemonData={e} />
            </React.Fragment>
          ))}
        </Block>
      ) : (
        <LoaderHeader />
      )}
      <PagePagination functionPage={setPage} page={page} />
    </>
  );
};
