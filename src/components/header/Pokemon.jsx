import { useState } from 'react';
import useTypeIcon from '../../context/useTypeIcon';

import { PokemonTypeDecoration } from './PokemonTypeDecoration';
import { HeaderError } from './HeaderError';
import { Details } from '../Details';
import { Block } from '../Block';

import { PokemonAbility } from '../pokemon/PokemonAbility';
import { PokemonImage } from '../pokemon/PokemonImage';
import { PokemonType } from '../pokemon/PokemonType';
import { PokemonName } from '../pokemon/PokemonName';
import { PokemonId } from '../pokemon/PokemonId';

import '../../assets/styles/headerArticle.css';

// todo usar el setState de esta manera para este caso esta mal, lo dice la propio documentacion
// todo https://es.reactjs.org/docs/hooks-reference.html#functional-updates
// ? lei la docuentacion, no encontre bien. Explica el porque esta mal para este caso
export const Pokemon = ({ data, ability, error }) => {
  const [modalPokemon, setModalPokemon] = useState(false);
  const [setPokemonTypeIcon, typeIcon] = useTypeIcon();

  const handleModal = () => setModalPokemon(!modalPokemon);

  return (
    <>
      {error ? (
        <HeaderError />
      ) : (
        <Block designBlock='header__article--pokemon'>
          <Block>
            <PokemonId id={data.id} />
            <PokemonType type={data.types} icon={typeIcon} pokemonTypeIcon={setPokemonTypeIcon} />
            <PokemonName name={data.name} />
            <PokemonAbility ability={ability} />
            <Details stateModal={modalPokemon} validationModal={handleModal} />
          </Block>
          <PokemonTypeDecoration typeIcon={typeIcon} />
          <Block designBlock='pokemon__header--img'>
            <PokemonImage pokeImage={data} />
          </Block>
        </Block>
      )}
    </>
  );
};
