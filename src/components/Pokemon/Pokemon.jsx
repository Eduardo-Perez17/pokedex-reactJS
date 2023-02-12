import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CONTAINER, ITEM } from '../../utils/Animation';
import { DETAILS } from '../../utils/path';

import '../../assets/styles/headerArticle.css';

import { useTypeIcon } from '../../custom/TypeIcon/useTypeIcon';
import { useData } from '../../context/dataPokemonDetails/DataPokemonProvider';

import { PokemonTypeDecoration } from '../PokemonTypeDecoration';
import { PokemonAbility } from '../PokemonAbility';
import { PokemonImage } from '../PokemonImage';
import { PokemonType } from '../PokemonType';
import { PokemonName } from '../PokemonName';
import { HeaderError } from '../HeaderError';
import { PokemonId } from '../PokemonId';
// import { Details } from '../Details';

const Pokemon = ({ data, ability, error }) => {
  const [typePokemon] = useTypeIcon(data.types);
  const [typePokemonImageStyles, setTypePokemonImageStyles] = useState([]);
  const { dataProviderHandle } = useData();

  useEffect(() => {
    dataProviderHandle(data);
  }, [data]);

  useEffect(() => {
    setTypePokemonImageStyles(typePokemon);
  }, [typePokemon]);

  return (
    <>
      {error ? (
        <HeaderError />
      ) : (
        <motion.div variants={CONTAINER} initial='hidden' animate='visible' className='header__article--pokemon'>
          <motion.div variants={ITEM}>
            <PokemonId id={data.id} />
            <PokemonType pokemonType={typePokemonImageStyles} />
            <PokemonName name={data.name} />
            <PokemonAbility ability={ability} />
            <Link to={DETAILS.path}>Details</Link>
            {/* <Details dataPokemon={data} /> */}
          </motion.div>
          <PokemonTypeDecoration typeIcon={typePokemonImageStyles} />
          <motion.div variants={ITEM} className='pokemon__header--img'>
            <PokemonImage pokeImage={data} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Pokemon;
