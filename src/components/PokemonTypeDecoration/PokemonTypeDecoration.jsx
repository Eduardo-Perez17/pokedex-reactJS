import React from 'react';
import { Block } from '../Block';
import { Image } from '../Image';

const PokemonTypeDecoration = ({ typeIcon }) => {
  return (
    <>
      {typeIcon && (
        <Block designBlock='main__decoration--type'>
          {typeIcon.map((icon) => (
            <React.Fragment key={icon.style}>
              <Image
                image={icon.image}
                alternativeText={icon.image}
                designImage='main__decoration--type-image after-before'
              />
            </React.Fragment>
          ))}
        </Block>
      )}
    </>
  );
};

export default PokemonTypeDecoration;
