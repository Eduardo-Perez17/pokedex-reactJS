import { DATA_OFFSET_LIMIT } from '../../utils/endpoints';

// * RETORNAR UNA PROMESA DE LA URL QUE SE INTRODUZCA EN EL PARAMETRO DE LA FUNCION
export const getData = async (url) => {
  const fechtData = await fetch(url);
  const responseData = await fechtData.json();
  return responseData;
};

// * RETORNA EL RESULTADO DE LA PROMESA QUE SE INTRODUZCA EN EL PARAMETRO DE LA FUNCION
export const dataPokemon = async (urlPokemon) => {
  const data = await getData(urlPokemon);
  return data;
};

// * RETORNA UN DATO ALEATORIO DE LA API
export const selectRandomData = (data) => {
  return data[Math.floor(Math.random() * data.length)];
};

// * SISTEMA DE PAGINADO Y LLAMADO A DATOS DE UNA API
export const allDataPokemonResults = async (limit, offset) => {
  const pokemons = await dataPokemon(`${DATA_OFFSET_LIMIT.limit}${limit}${DATA_OFFSET_LIMIT.offset}${offset}`);
  return pokemons;
};

// * RETORNA TODOS LOS DATOS DE LA API CON UN PROMISE.ALL
export const resolveDataPokemons = async (poke, page) => {
  const pokemons = await allDataPokemonResults(poke, page);
  const promises = pokemons.results.map(async (e) => {
    return await dataPokemon(e.url);
  });
  const results = await Promise.all(promises);
  return results;
};
