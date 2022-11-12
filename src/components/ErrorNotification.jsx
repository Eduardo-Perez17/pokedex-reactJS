import { Block } from './Block';
import { ContainerParagraph } from './ContainerParagraph';

export const ErrorNotification = () => {
  return (
    <Block designBlock='main__error--notification'>
      <ContainerParagraph paragraph='Hubo en error en la carga de los datos de los pokemones. Por favor actualice la pokedex' />
    </Block>
  );
};
