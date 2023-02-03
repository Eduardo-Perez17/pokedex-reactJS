import { Block } from '../components/Block';

const Layaout = ({ designGrid, children }) => {
  return (
    <Block designBlock={designGrid}>
      <Block designBlock='grid-father'>
        <Block designBlock='grid-son'>{children}</Block>
      </Block>
    </Block>
  );
};

export default Layaout;
