import { useData } from '../../context/dataPokemonDetails/DataPokemonProvider';

import './details.css';

import { PokemonDetailHeader } from '../../components/pageDetailPokemon/PokemonDetailHeader';
import { PokemonDetailArticle } from '../../components/pageDetailPokemon/PokemonDetailArticle';
import { ButtonHome } from '../../components/ButtonHome';
import { ReturnTop } from '../../components/ReturnTop';
import { Burble } from '../../components/Burble';
import { Block } from '../../components/Block';

const Details = () => {
  const { pokemonDataProvider } = useData();

  return (
    <>
      <Block designBlock='pokemon__detail--container' blockId='header'>
        <PokemonDetailHeader pokemonData={pokemonDataProvider} />
        <PokemonDetailArticle pokemonData={pokemonDataProvider} />
        <ButtonHome />
        <ReturnTop />
      </Block>
      <Burble />
    </>
  );
};

export default Details;
