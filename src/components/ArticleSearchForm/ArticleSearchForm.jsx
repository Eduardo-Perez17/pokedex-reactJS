import { useSearchPokemonData } from '../../custom/SearchPokemonData/useSearchPokemonData';
import { IMAGE_ARTICLE } from '../../utils/images';

import { ContainerParagraph } from '../ContainerParagraph';
import { ErrorNotification } from '../ErrorNotification';
import { Button } from '../Button';
import { Input } from '../Input';
import { Image } from '../Image';
import { Form } from '../Form';

const ArticleSearchForm = ({ setPokemonValue }) => {
  const [inputPokemon, searchError, handleInputPokemon, searchPokemonDataHandle] = useSearchPokemonData({
    setPokemonValue,
  });

  return (
    <>
      <Form formStyle='form__search--pokemon main-form' formEventSubmit={searchPokemonDataHandle}>
        <Input
          typeInput='text'
          designInput='input'
          valueInput={inputPokemon}
          onChangeEvent={handleInputPokemon}
          nameInput='input'
        />
        <Button
          typeButton='button'
          onClickEvent={inputPokemon && searchPokemonDataHandle}
          designButton='button btn-article-pagination'>
          <Image image={IMAGE_ARTICLE.image} alternativeText={IMAGE_ARTICLE.alt} designImage='search__btn' />
        </Button>
      </Form>
      {searchError && (
        <ErrorNotification>
          <ContainerParagraph>This pokemon has not been found</ContainerParagraph>
        </ErrorNotification>
      )}
    </>
  );
};

export default ArticleSearchForm;
