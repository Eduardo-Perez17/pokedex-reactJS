import { PokemonAbility } from '../PokemonAbility';
import { ContainerParagraph } from '../ContainerParagraph';
import { Block } from '../Block';
import { Title } from '../Title';

const ModalPokemonAbility = ({ ability }) => {
  return (
    <Block designBlock='pokemon__ability'>
      <Title size='md'>Pokemon Ability</Title>
      {ability ? (
        <Block designBlock='ability'>
          {ability.effect_entries && ability.effect_entries[1] ? (
            <>
              <Title size='sm'>Primary effect</Title>
              <PokemonAbility ability={ability} />
              <Title size='sm'>Secondary effect</Title>
              <ContainerParagraph>{ability.effect_entries[1].short_effect}</ContainerParagraph>
            </>
          ) : (
            <ContainerParagraph>this pokemon has no main ability</ContainerParagraph>
          )}
        </Block>
      ) : (
        <ContainerParagraph>data error in ability</ContainerParagraph>
      )}
    </Block>
  );
};

export default ModalPokemonAbility;
