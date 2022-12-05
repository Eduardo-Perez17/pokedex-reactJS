import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getData } from '../services/callAllPokemon';

import { PokemonArticle } from '../components/article/PokemonArticle';
import { PokemonAbility } from './pokemon/PokemonAbility';
import { Button } from '../components/Button';
import { Block } from './Block';
import { Title } from './Title';

import '../assets/styles/modal.css';
import { ContainerParagraph } from './ContainerParagraph';

export const ModalPokemon = ({ handdleModalOpen, modalOpen, dataPokemon: data, validationMoreDetails }) => {
  const [ability, setAbility] = useState({});
  const [specie, setSpecie] = useState({});

  const moreDataPokemon = async () => {
    const ability = `https://pokeapi.co/api/v2/ability/${data.id}`;
    const species = `https://pokeapi.co/api/v2/pokemon-species/${data.id}/`;
    const dataAbility = await getData(ability);
    const dataSpecies = await getData(species);

    setAbility(dataAbility);
    setSpecie(dataSpecies);
  };

  useEffect(() => {
    moreDataPokemon();
  }, []);

  return ReactDOM.createPortal(
    <Block designBlock='modal'>
      <Block designBlock='modal__container'>
        <PokemonArticle pokemonData={data} validationMoreDetails={validationMoreDetails} />
        <Button typeButton='button' designButton='button modal__close-button' onClick={() => handdleModalOpen(!modalOpen)}>
          ✖
        </Button>
        <Block designBlock='pokemon__info'>
          <Title>
            <h2>Stats</h2>
          </Title>
          <Block designBlock='pokemon__info--stats'>
            {data.stats.map(stats => (
              <React.Fragment key={stats.stat.name}>
                <ContainerParagraph paragraph={stats.stat.name} designContainerParagraph='state__name' />
                <Block designBlock='main__stats'>
                  <ContainerParagraph paragraph={`${stats.base_stat}`} designContainerParagraph='state__base--info' />
                  <div style={{ width: stats.base_stat + '%' }} className='state__base--info-percentage'></div>
                </Block>
              </React.Fragment>
            ))}
          </Block>
        </Block>
        <Block designBlock='more__data--pokemon'>
          <Block designBlock='pokemon__ability'>
            <Title>
              <h3>Pokemon Ability</h3>
            </Title>
            {ability ? (
              <Block designBlock='ability'>
                {ability.effect_entries ? (
                  <>
                    <Title>
                      <h4>Primary effect</h4>
                    </Title>
                    <PokemonAbility ability={ability} />
                    <Title>
                      <h4>Secondary effect</h4>
                    </Title>
                    <ContainerParagraph paragraph={ability.effect_entries[1].short_effect} />
                  </>
                ) : null}
              </Block>
            ) : (
              <ContainerParagraph paragraph='data error in ability' />
            )}
          </Block>
          <Block designBlock='pokemon__specie'>
            <Title>
              <h3>Pokemon Specie</h3>
            </Title>
            {specie ? (
              <Block designBlock='specie'>
                <ContainerParagraph paragraph={specie.gender_rate < 5 ? `gender rate: feminine (${specie.gender_rate})` : `gender rate: male (${specie.gender_rate})`} />
                {specie.growth_rate && specie.habitat ? (
                  <>
                    <ContainerParagraph paragraph={`growth rate: ${specie.growth_rate.name}`} />
                    <ContainerParagraph paragraph={`habitat: ${specie.habitat.name}`} />
                  </>
                ) : null}
                {specie.generation ? <ContainerParagraph paragraph={`generation: ${specie.generation.name}`} /> : null}
                {specie.egg_groups && specie.evolves_from_species ? (
                  <>
                    <ContainerParagraph paragraph={`species to evolve : ${specie.evolves_from_species.name}`} />
                    <ContainerParagraph paragraph={`egg groups: `} />
                    <Block designBlock='main__egg'>
                      {specie.egg_groups.map(egg => (
                        <React.Fragment key={egg.name}>
                          <ContainerParagraph paragraph={egg.name} />
                        </React.Fragment>
                      ))}
                    </Block>
                  </>
                ) : (
                  <ContainerParagraph paragraph='this species has no egg group' />
                )}
              </Block>
            ) : (
              <ContainerParagraph paragraph='data error in species' />
            )}
          </Block>
          <Block designBlock='main__varieties'></Block>
        </Block>
      </Block>
    </Block>,
    document.getElementById('modal')
  );
};
