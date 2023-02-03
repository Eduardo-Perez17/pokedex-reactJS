import { IMAGE_REFRESH } from '../../utils/images';

import '../../assets/styles/pokemon.css';
import '../../assets/styles/loaders.css';

import { ContainerParagraph } from '../ContainerParagraph';
import { ErrorNotification } from '../ErrorNotification';
import { LoaderHeader } from '../Loaders/LoadersHeader';
import { Pokemon } from '../Pokemon';
import { Button } from '../Button';
import { Burble } from '../Burble';
import { Image } from '../Image';

const HeaderArticle = ({ pokemonRandom, pokemonRandomAbility, errorFetchData, errorNotification, resolveDataAPI }) => {
  return (
    <>
      {errorNotification && (
        <ErrorNotification>
          <ContainerParagraph>
            There was an error loading the pokemon data. Please update the pokedex
          </ContainerParagraph>
        </ErrorNotification>
      )}
      {pokemonRandom ? (
        <>
          <Pokemon data={pokemonRandom} ability={pokemonRandomAbility} error={errorFetchData} />
          <Button
            typeButton='button'
            onClickEvent={resolveDataAPI}
            designButton='button header__details--button btn-refresh'>
            <Image
              image={IMAGE_REFRESH.image}
              alternativeText={IMAGE_REFRESH.alt}
              designImage='icon icon__button--header'
            />
            refresh
          </Button>
        </>
      ) : (
        <LoaderHeader />
      )}
      <Burble />
    </>
  );
};

export default HeaderArticle;
