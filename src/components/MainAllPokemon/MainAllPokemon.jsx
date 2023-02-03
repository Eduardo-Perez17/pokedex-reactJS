import React, { useState, useEffect } from 'react';
import { resolveDataPokemons } from '../../services/callAllPokemon';

import { PagePagination } from '../PagePagination/PagePagination';
import { LoaderHeader } from '../Loaders/LoadersHeader';
import { PokemonArticle } from '../PokemonArticle';
import { Block } from '../Block';

const MainAllPokemon = () => {
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
          {pokemon.map((allDataPokemon) => (
            <React.Fragment key={allDataPokemon.id}>
              <PokemonArticle pokemonData={allDataPokemon} />
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

export default MainAllPokemon;
