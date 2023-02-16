import { useState, useEffect } from 'react';
import { useData } from '../../../context/dataPokemonDetails/DataPokemonProvider';
import { useTypeIcon } from '../../../custom/TypeIcon/useTypeIcon';
import { ICON_FAVORITE, ICON_FAVORITE_LIST } from '../../../utils/images';

import { PokemonImage } from '../../PokemonImage';
import { PokemonName } from '../../PokemonName';
import { PokemonType } from '../../PokemonType';
import { PokemonId } from '../../PokemonId';
import { Button } from '../../Button';
import { Block } from '../../Block';
import { Image } from '../../Image';

const PokemonDetailHeader = ({ pokemonData }) => {
  const [favoriteList, setFavoriteList] = useState(false);
  const [typePokemon] = useTypeIcon(pokemonData?.types);
  const [typePokemonImageStyles, setTypePokemonImageStyles] = useState([]);
  const { dataFavoritePokemon } = useData();

  const pokemonFavoriteHanddle = () => {
    setFavoriteList(!favoriteList);
    dataFavoritePokemon(pokemonData);
  };

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
            <Button designButton='button button-favorite' onClickEvent={pokemonFavoriteHanddle}>
              {!favoriteList ? (
                <Image image={ICON_FAVORITE.image} alternativeText={favoriteList.alt} />
              ) : (
                <Image image={ICON_FAVORITE_LIST.image} alternativeText={favoriteList.alt} />
              )}
              add to favorites
            </Button>
          </Block>
          <Block designBlock='pokemon__detail--header-img'>
            <PokemonImage pokeImage={pokemonData} pokeImageStyle='pokemon__header--img-item' />
          </Block>
        </Block>
      )}
    </>
  );
};

export default PokemonDetailHeader;
