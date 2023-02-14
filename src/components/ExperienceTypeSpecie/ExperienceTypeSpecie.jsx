import { ICON_SPECIE, ICON_EXPERIENCIE, ICON_TYPE } from '../../utils/images';

import { ContainerParagraph } from '../ContainerParagraph';
import { Block } from '../Block';
import { Image } from '../Image';

const ExperienceTypeSpecie = ({ pokemonData }) => {
  return (
    <Block designBlock='pokemon__detail--experience-type-specie'>
      <Block designBlock='pokemon__detail--experience'>
        <ContainerParagraph>Experience</ContainerParagraph>
        <Image image={ICON_EXPERIENCIE.image} alternativeText={ICON_EXPERIENCIE.alt} />
        <ContainerParagraph>{pokemonData.base_experience}</ContainerParagraph>
      </Block>

      <Block designBlock='pokemon__detail--specie'>
        <ContainerParagraph>Specie</ContainerParagraph>
        <Image image={ICON_SPECIE.image} alternativeText={ICON_SPECIE.alt} />
        <ContainerParagraph>{pokemonData.species.name}</ContainerParagraph>
      </Block>

      <Block designBlock='pokemon__detail--type'>
        <ContainerParagraph>Type</ContainerParagraph>
        <Image image={ICON_TYPE.image} alternativeText={ICON_TYPE.alt} />
        <ContainerParagraph>{pokemonData.types[0].type.name}</ContainerParagraph>
      </Block>
    </Block>
  );
};

export default ExperienceTypeSpecie;
