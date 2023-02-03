import { useState, useEffect } from 'react';
import { DATA_POKEMON } from '../../utils/endpoints';
import { getData } from '../../services/callAllPokemon';

const AbilityAndSpecie = ({ data }) => {
  const [ability, setAbility] = useState({});
  const [specie, setSpecie] = useState({});

  const moreDataPokemon = async () => {
    const ability = `${DATA_POKEMON.ability}${data.id}`;
    const species = `${DATA_POKEMON.specie}${data.id}/`;
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

export default AbilityAndSpecie;
