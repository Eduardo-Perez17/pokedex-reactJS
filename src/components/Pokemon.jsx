import { useState } from 'react';
import useTypeIcon from '../context/useTypeIcon';
import '../assets/styles/headerArticle.css';

import { Block } from './Block';
import { Details } from './Details';

import { PokemonId } from './pokemon/PokemonId';
import { PokemonType } from './pokemon/PokemonType';
import { PokemonName } from './pokemon/PokemonName';
import { PokemonAbility } from './pokemon/PokemonAbility';
import { PokemonImage } from './pokemon/PokemonImage';
import { PokemonTypeDecoration } from './PokemonTypeDecoration';

export const Pokemon = ({ data, ability }) => {
  const [modalPokemon, setModalPokemon] = useState(false);
  const [setPokemonTypeIcon, typeIcon] = useTypeIcon();

  // todo usar el setState de esta manera para este caso esta mal, lo dice la propio documentacion
  // todo https://es.reactjs.org/docs/hooks-reference.html#functional-updates
  const handleModal = () => setModalPokemon(!modalPokemon);

  return (
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
  );
};
