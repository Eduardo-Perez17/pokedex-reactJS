import { PokemonMoreAbility } from '../PokemonMoreAbility';
import { ContainerParagraph } from '../ContainerParagraph';
import { PokemonHeight } from '../PokemonHeight';
import { PokemonWeight } from '../PokemonWeight';
import { SpanContainer } from '../SpanContainer';
import { PokemonId } from '../PokemonId';
import { Block } from '../Block';

const PokemonDetailArticleInfo = ({ pokemonData, dataAbility }) => {
  return (
    <Block designBlock='pokemon__detail--article-data-ability'>
      <SpanContainer spanStyle='pokemon__detail--height'>
        <ContainerParagraph>Height:</ContainerParagraph>
        <PokemonHeight dataHeight={pokemonData} />
      </SpanContainer>
      <SpanContainer spanStyle='pokemon__detail--weight'>
        <ContainerParagraph>Weight:</ContainerParagraph>
        <PokemonWeight dataWeight={pokemonData} />
      </SpanContainer>
      <SpanContainer spanStyle='pokemon__detail--generation'>
        <ContainerParagraph>Generation:</ContainerParagraph>
        <ContainerParagraph>{dataAbility?.generation?.name}</ContainerParagraph>
      </SpanContainer>
      <SpanContainer spanStyle='pokemon__detail--id'>
        <ContainerParagraph>Id:</ContainerParagraph>
        <PokemonId id={pokemonData.id} />
      </SpanContainer>
      <SpanContainer spanStyle='pokemon__detail--hability'>
        <ContainerParagraph>Habilidades:</ContainerParagraph>
        <PokemonMoreAbility dataMoreAbility={pokemonData.abilities} />
      </SpanContainer>
    </Block>
  );
};

export default PokemonDetailArticleInfo;
