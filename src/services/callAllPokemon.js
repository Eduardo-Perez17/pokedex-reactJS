export const getData = async url => {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
};

export const dataPokemon = async urlPokemon => {
  const data = await getData(urlPokemon);
  return data;
};

export const allDataPokemonResults = async (limit, offset) => {
  const pokemons = await dataPokemon(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  return pokemons;
};

export const resolveDataPokemons = async (poke, page) => {
  const pokemons = await allDataPokemonResults(poke, page);
  const promises = pokemons.results.map(async e => {
    return await dataPokemon(e.url);
  });
  const results = await Promise.all(promises);
  return results;
};
