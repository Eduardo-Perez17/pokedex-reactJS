import { useState, useEffect } from 'react';
import { DATA_POKEMON } from '../../utils/endpoints';
import { getData } from '../../services/callAllPokemon';

export const AbilityAndSpecie = ({ dataPokemon }) => {
  const [ability, setAbility] = useState({});
  const [specie, setSpecie] = useState({});

  const moreDataPokemon = async () => {
    const ability = `${DATA_POKEMON.ability}${dataPokemon.id}`;
    const species = `${DATA_POKEMON.specie}${dataPokemon.id}`;
    const dataAbility = await getData(ability);
    const dataSpecies = await getData(species);

    setAbility(dataAbility);
    setSpecie(dataSpecies);
  };

  useEffect(() => {
    moreDataPokemon();
  }, []);

  return [ability, specie];
};
