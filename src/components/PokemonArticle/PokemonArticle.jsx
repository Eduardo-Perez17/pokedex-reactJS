import { useTypeIcon } from '../../custom/TypeIcon/useTypeIcon';
import { useTypeBackground } from '../../custom/TypeBackground/useTypeBackground';
import { useSharePokemon } from '../../custom/SharePokemon/useSharePokemon';
import { ICON_SHARE, ICON_CHECKED, ICON_ERROR } from '../../utils/images';

import '../../assets/styles/pokemonArticle.css';

import { CardPokemonInfoSecundary } from '../CardPokemonInfoSecundary';
import { CardPokemonMain } from '../CardPokemonMain';
import { CardPokemonInfo } from '../CardPokemonInfo';
import { ErrorNotification } from '../ErrorNotification';
import { Details } from '../Details';
import { Button } from '../Button';
import { Block } from '../Block';
import { Image } from '../Image';

const PokemonArticle = ({ pokemonData, validationMoreDetails }) => {
  const [typePokemon] = useTypeIcon(pokemonData.types);
  const [typeBackground] = useTypeBackground(typePokemon);
  const [handleShare, notificationChecked, notificationError] = useSharePokemon(pokemonData);

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
          {!validationMoreDetails && <Details dataPokemon={pokemonData} />}
        </Block>
      )}
    </>
  );
};

export default PokemonArticle;
