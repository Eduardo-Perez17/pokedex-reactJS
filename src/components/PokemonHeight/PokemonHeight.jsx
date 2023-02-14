import { ContainerParagraph } from '../ContainerParagraph';

const PokemonHeight = ({ dataHeight }) => {
  const height = dataHeight.height;

  return (
    <ContainerParagraph>
      {height < 10 ? `0,${height} m` : `${height.toFixed().charAt(0)},${height.toFixed().charAt(1)} m`}
    </ContainerParagraph>
  );
};

export default PokemonHeight;
