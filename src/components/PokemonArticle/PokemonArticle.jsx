import { Link } from 'react-router-dom';
import { DETAILS } from '../../utils/path';
import { useTypeIcon } from '../../custom/TypeIcon/useTypeIcon';
import { useTypeBackground } from '../../custom/TypeBackground/useTypeBackground';
import { useSharePokemon } from '../../custom/SharePokemon/useSharePokemon';
import { ICON_SHARE, ICON_CHECKED, ICON_ERROR, IMAGE_INFO } from '../../utils/images';
import { useData } from '../../context/dataPokemonDetails/DataPokemonProvider';

import '../../assets/styles/pokemonArticle.css';

import { CardPokemonInfoSecundary } from '../CardPokemonInfoSecundary';
import { CardPokemonMain } from '../CardPokemonMain';
import { CardPokemonInfo } from '../CardPokemonInfo';
import { ErrorNotification } from '../ErrorNotification';
import { Button } from '../Button';
import { Block } from '../Block';
import { Image } from '../Image';

const PokemonArticle = ({ pokemonData, validationMoreDetails }) => {
  const [typePokemon] = useTypeIcon(pokemonData.types);
  const [typeBackground] = useTypeBackground(typePokemon);
  const [handleShare, notificationChecked, notificationError] = useSharePokemon(pokemonData);

  const { dataProviderHandle } = useData();
  const newDataProvider = () => dataProviderHandle(pokemonData);

  return (
    <>
      {pokemonData && (
        <Block designBlock={`card__pokemon ${typeBackground}_background`}>
          <CardPokemonMain pokemonData={pokemonData} />
          <CardPokemonInfo pokemonData={pokemonData} typePokemon={typePokemon} />
          <CardPokemonInfoSecundary pokemonData={pokemonData} />
          <Block designBlock='share__button'>
            <Button designButton='share button' onClickEvent={handleShare}>
              <Image image={ICON_SHARE.image} alternativeText={ICON_SHARE.text} />
              Share
            </Button>
            {notificationChecked && (
              <ErrorNotification>
                <Image image={ICON_CHECKED.image} alternativeText={ICON_CHECKED.text} />
                Has been shared successfully
              </ErrorNotification>
            )}
            {notificationError && (
              <ErrorNotification>
                <Image image={ICON_ERROR.image} alternativeText={ICON_ERROR.text} />
                There was an error in sharing the pokemon. please try again
              </ErrorNotification>
            )}
          </Block>
          {!validationMoreDetails && (
            <Block designBlock='header__details'>
              <Link to={DETAILS.path}>
                <Button typeButton='button' designButton='button button-article' onClickEvent={newDataProvider}>
                  <Image
                    image={IMAGE_INFO.image}
                    alternativeText={IMAGE_INFO.alt}
                    designImage='icon icon__button--header'
                  />
                  more details
                </Button>
              </Link>
            </Block>
          )}
        </Block>
      )}
    </>
  );
};

export default PokemonArticle;
