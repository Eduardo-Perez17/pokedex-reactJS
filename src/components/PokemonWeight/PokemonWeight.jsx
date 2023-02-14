import { ContainerParagraph } from '../ContainerParagraph';

const PokemonWeight = ({ dataWeight }) => {
  const weight = dataWeight.weight;
  return (
    <ContainerParagraph>
      {weight < 10 ? `0,${weight} kg` : `${weight.toFixed().charAt(0)},${weight.toFixed().charAt(1)} kg`}
    </ContainerParagraph>
  );
};

export default PokemonWeight;
