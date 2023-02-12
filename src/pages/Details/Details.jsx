import { useData } from '../../context/dataPokemonDetails/DataPokemonProvider';
import './details.css';

const Details = () => {
  const { pokemonDataProvider } = useData();

  return (
    <>
      <h1>Details</h1>
      <h2>{pokemonDataProvider?.name}</h2>
    </>
  );
};

export default Details;
