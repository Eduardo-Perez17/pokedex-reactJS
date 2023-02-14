import { useState, useEffect } from 'react';
import { useTypeIcon } from '../../../custom/TypeIcon/useTypeIcon';
import { ICON_FAVORITE } from '../../../utils/images';

import { PokemonImage } from '../../PokemonImage';
import { PokemonName } from '../../PokemonName';
import { PokemonType } from '../../PokemonType';
import { PokemonId } from '../../PokemonId';
import { Button } from '../../Button';
import { Block } from '../../Block';
import { Image } from '../../Image';

// ! PONER LOADERS

const PokemonDetailHeader = ({ pokemonData }) => {
  const [typePokemon] = useTypeIcon(pokemonData?.types);
  const [typePokemonImageStyles, setTypePokemonImageStyles] = useState([]);

  useEffect(() => {
    setTypePokemonImageStyles(typePokemon);
  }, [typePokemon]);

  return (
    <>
      {pokemonData && (
        <Block designBlock='pokemon__detail--header'>
          <Block designBlock='pokemon__detail--header-info'>
            <PokemonId id={pokemonData.id} />
            <PokemonName name={pokemonData.name} />
            <PokemonType pokemonType={typePokemonImageStyles} />
            <Button designButton='button button-favorite'>
              <Image image={ICON_FAVORITE.image} alternativeText={ICON_FAVORITE.alt} />
              add to favorites
            </Button>
          </Block>
          <Block designBlock='pokemon__detail--header-img'>
            <PokemonImage pokeImage={pokemonData} />
          </Block>
        </Block>
      )}
    </>
  );
};

export default PokemonDetailHeader;
