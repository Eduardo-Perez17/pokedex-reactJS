import { Block } from './Block';
import { ContainerParagraph } from './ContainerParagraph';

export const ErrorNotification = () => {
  return (
    <Block designBlock='main__error--notification'>
      <ContainerParagraph paragraph='There was an error loading the pokemon data. Please update the pokedex' />
    </Block>
  );
};
