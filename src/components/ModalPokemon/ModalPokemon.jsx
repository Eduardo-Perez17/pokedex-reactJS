import ReactDOM from 'react-dom';
import AbilityAndSpecie from '../../custom/AbilityAndSpecie/useAbilityAndSpecie';

import '../../assets/styles/modal.css';

import { PokemonArticle } from '../PokemonArticle';
import { ModalPokemonStats } from '../ModalPokemonStats';
import { ModalPokemonAbility } from '../ModalPokemonAbility';
import { ModalPokemonSpecie } from '../ModalPokemonSpecie';
import { Button } from '../Button';
import { Block } from '../Block';

const ModalPokemon = ({ handdleModalOpen, modalOpen, dataPokemon: data, validationMoreDetails }) => {
  const [ability, specie] = AbilityAndSpecie({ data });

  return ReactDOM.createPortal(
    <Block designBlock='modal'>
      <Block designBlock='modal__container'>
        <PokemonArticle pokemonData={data} validationMoreDetails={validationMoreDetails} />
        <Button
          typeButton='button'
          designButton='button modal__close-button'
          onClickEvent={() => handdleModalOpen(!modalOpen)}>
          ✖
        </Button>

        <ModalPokemonStats data={data} />

        <Block designBlock='more__data--pokemon'>
          <ModalPokemonAbility ability={ability} />
          <ModalPokemonSpecie specie={specie} />
        </Block>
      </Block>
    </Block>,
    document.getElementById('modal')
  );
};

export default ModalPokemon;
