import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTypeIcon } from '../../custom/TypeIcon/useTypeIcon';
import { CONTAINER, ITEM } from '../../utils/Animation';

import '../../assets/styles/headerArticle.css';

import { PokemonTypeDecoration } from '../PokemonTypeDecoration';
import { HeaderError } from '../HeaderError';
// import { Details } from '../Details';

import { PokemonAbility } from '../PokemonAbility';
import { PokemonImage } from '../PokemonImage';
import { PokemonType } from '../PokemonType';
import { PokemonName } from '../PokemonName';
import { PokemonId } from '../PokemonId';

const Pokemon = ({ data, ability, error }) => {
  const [typePokemon] = useTypeIcon(data.types);
  const [typePokemonImageStyles, setTypePokemonImageStyles] = useState([]);

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
            <button>Details</button>
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
