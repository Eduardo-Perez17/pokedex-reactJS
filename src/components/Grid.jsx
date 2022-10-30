import { Block } from './Block';

export const Grid = props => {
  return (
    <div className={props.designGrid}>
      <Block designBlock='grid-father'>
        <Block designBlock='grid-son'>{props.children}</Block>
      </Block>
    </div>
  );
};
