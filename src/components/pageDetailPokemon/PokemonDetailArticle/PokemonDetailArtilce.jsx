import { useState, useEffect } from 'react';
import { DATA_POKEMON } from '../../../utils/endpoints';
import { dataPokemon } from '../../../services/callAllPokemon';

import { PokemonDetailArticleStats } from '../../PokemonDetailArticleStats';
import { PokemonDetailArticleMoves } from '../../PokemonDetailArticleMoves';
import { PokemonDetailArticleInfo } from '../../PokemonDetailArticleInfo';
import { PokemonDetailArticleImage } from '../../PokemonDetailArticleImage';
import { ExperienceTypeSpecie } from '../../ExperienceTypeSpecie';
import { PokemonAbility } from '../../PokemonAbility';
import { PokemonName } from '../../PokemonName';
import { Block } from '../../Block';
import { Title } from '../../Title';

// ! PONER LOADER

const PokemonDetailArtilce = ({ pokemonData }) => {
  const [dataAbility, setDataAbility] = useState();

  const getDataAbility = async () => {
    const data = await dataPokemon(`${DATA_POKEMON.ability}${pokemonData.id}`);
    setDataAbility(data);
  };

  useEffect(() => {
    getDataAbility();
  }, []);

  return (
    <>
      {pokemonData && (
        <Block designBlock='pokemon__detail--article'>
          <Block designBlock='pokemon__detail--article-info'>
            <PokemonName name={pokemonData.name} />
            <PokemonAbility ability={dataAbility} />

            <Block designBlock='pokemon__detail--article-info-article'>
              <PokemonDetailArticleInfo pokemonData={pokemonData} dataAbility={dataAbility} />
              <ExperienceTypeSpecie pokemonData={pokemonData} />
            </Block>
          </Block>

          <Block designBlock='pokemon__detail--article-statistics'>
            <Title size='md'>Base Stats</Title>
            <Block designBlock='pokemon__detail--article-statistics-main'>
              <PokemonDetailArticleStats pokemonData={pokemonData} />
            </Block>
          </Block>

          <Block designBlock='pokemon__detail--article-moves'>
            <Title size='md'>Moves</Title>
            <Block designBlock='pokemon__detail--article-moves-main'>
              <PokemonDetailArticleMoves pokemonData={pokemonData} />
            </Block>
          </Block>

          <Block designBlock='pokemon__detail--article-image'>
            <Title size='md'>More Images</Title>
            <Block designBlock='pokemon__detail--article-image-main'>
              <PokemonDetailArticleImage pokemonData={pokemonData} />
            </Block>
          </Block>
        </Block>
      )}
    </>
  );
};

export default PokemonDetailArtilce;
