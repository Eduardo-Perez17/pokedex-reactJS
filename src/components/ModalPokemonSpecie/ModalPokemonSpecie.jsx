import React from 'react';

import { ContainerParagraph } from '../ContainerParagraph';
import { Block } from '../Block';
import { Title } from '../Title';

const ModalPokemonSpecie = ({ specie }) => {
  return (
    <Block designBlock='pokemon__specie'>
      <Title size='md'>Pokemon Specie</Title>
      {specie ? (
        <Block designBlock='specie'>
          <ContainerParagraph>
            {specie.gender_rate < 5
              ? `gender rate: feminine (${specie.gender_rate})`
              : `gender rate: male (${specie.gender_rate})`}
          </ContainerParagraph>
          {specie.growth_rate && specie.habitat && (
            <>
              <ContainerParagraph>{`growth rate: ${specie.growth_rate.name}`}</ContainerParagraph>
              <ContainerParagraph>{`habitat: ${specie.habitat.name}`}</ContainerParagraph>
            </>
          )}
          {specie.generation && <ContainerParagraph paragraph={`generation: ${specie.generation.name}`} />}
          {specie.egg_groups && specie.evolves_from_species ? (
            <>
              <ContainerParagraph>{`species to evolve : ${specie.evolves_from_species.name}`}</ContainerParagraph>
              <ContainerParagraph>egg groups:</ContainerParagraph>
              <Block designBlock='main__egg'>
                {specie.egg_groups.map((egg) => (
                  <React.Fragment key={egg.name}>
                    <ContainerParagraph>{egg.name}</ContainerParagraph>
                  </React.Fragment>
                ))}
              </Block>
            </>
          ) : (
            <ContainerParagraph>this species has no egg group</ContainerParagraph>
          )}
        </Block>
      ) : (
        <ContainerParagraph>data error in species</ContainerParagraph>
      )}
    </Block>
  );
};

export default ModalPokemonSpecie;
