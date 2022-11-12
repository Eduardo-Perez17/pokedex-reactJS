import { Block } from './Block';

export const Grid = ({ designGrid, children }) => {
  return (
    <Block designBlock={designGrid}>
      <Block designBlock='grid-father'>
        <Block designBlock='grid-son'>{children}</Block>
      </Block>
    </Block>
  );
};
