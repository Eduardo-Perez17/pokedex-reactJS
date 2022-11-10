// * RETORNAR UNA PROMESA DE LA URL QUE SE INTRODUZCA EN EL PARAMETRO DE LA FUNCION
export const getData = async url => {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      return data;
    })
    .catch(err => console.log(err));
};

// * RETORNA EL RESULTADO DE LA PROMESA QUE SE INTRODUZCA EN EL PARAMETRO DE LA FUNCION
export const dataPokemon = async urlPokemon => {
  const data = await getData(urlPokemon);
  return data;
};

// * RETORNA UN DATO ALEATORIO DE LA API
export const selectRandomData = data => {
  return data[Math.floor(Math.random() * data.length)];
};

// * SISTEMA DE PAGINADO Y LLAMADO A DATOS DE UNA API
export const allDataPokemonResults = async (limit, offset) => {
  const pokemons = await dataPokemon(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  return pokemons;
};

// * RETORNA TODOS LOS DATOS DE LA API CON UN PROMISE.ALL
export const resolveDataPokemons = async (poke, page) => {
  const pokemons = await allDataPokemonResults(poke, page);
  const promises = pokemons.results.map(async e => {
    return await dataPokemon(e.url);
  });
  const results = await Promise.all(promises);
  return results;
};
