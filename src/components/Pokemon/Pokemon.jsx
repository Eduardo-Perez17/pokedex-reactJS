import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CONTAINER, ITEM } from '../../utils/Animation';
import { DETAILS } from '../../utils/path';
import { IMAGE_INFO } from '../../utils/images';

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
import { Button } from '../Button';
import { Image } from '../Image';

// ! CUANDO PRESIONE UN BOTON MANDAR LA INFORMACION DEL POKEMON, NO ANTES

const Pokemon = ({ data, ability, error }) => {
  const [typePokemon] = useTypeIcon(data.types);
  const [typePokemonImageStyles, setTypePokemonImageStyles] = useState([]);
  const { dataProviderHandle } = useData();

  // ! ====================
  const newDataProvider = () => {
    dataProviderHandle(data);
  };
  // ! ====================

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
            <Link to={DETAILS.path}>
              <Button onClickEvent={newDataProvider} designButton='button header__details--button button-info'>
                <Image image={IMAGE_INFO.image} alternativeText={IMAGE_INFO.alt} />
                {DETAILS.name}
              </Button>
            </Link>
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
