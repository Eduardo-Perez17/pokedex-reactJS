import { useTypeIcon } from '../../custom/TypeIcon/useTypeIcon';
import { useTypeBackground } from '../../custom/TypeBackground/useTypeBackground';

import { ContainerParagraph } from '../ContainerParagraph';
import { SpanContainer } from '../SpanContainer';
import { Block } from '../Block';

const PokemonDetailArticleStats = ({ pokemonData }) => {
  const [typePokemon] = useTypeIcon(pokemonData?.types);
  const [typeBackground] = useTypeBackground(typePokemon);

  return (
    <>
      {pokemonData.stats.map((stats) => (
        <Block key={stats.stat.name} designBlock='pokemon__detail--article-statistics-item'>
          <ContainerParagraph>
            {stats.stat.name}: <SpanContainer>{stats.base_stat}%</SpanContainer>
          </ContainerParagraph>
          <Block designBlock='pokemon__detail--article-statistics-item-bar'>
            <div
              className={`${typeBackground} bar-detail`}
              style={stats.base_stat < 100 ? { width: stats.base_stat + '%' } : { width: 100 + '%' }}>
              <SpanContainer>{stats.base_stat}%</SpanContainer>
            </div>
          </Block>
        </Block>
      ))}
      <ContainerParagraph>
        The ranges shown are for a level 100 Pokémon - the maximum values are based on a nature
      </ContainerParagraph>
      <ContainerParagraph>
        beneficial, 252 EV, 31 IV; minimum values are based on a hindering nature, 0 EV, 0 IV
      </ContainerParagraph>
    </>
  );
};

export default PokemonDetailArticleStats;
