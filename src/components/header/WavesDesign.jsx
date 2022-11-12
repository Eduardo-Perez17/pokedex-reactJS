import '../../assets/styles/waves.css';
import { Block } from '../Block';

export const WavesDesign = () => {
  // todo tienes un componente para los div
  // todo si usas un div sin contenido cierra de una <div /> queda mas limpio

  return (
    <>
      <Block designBlock='wave-main'>
        <Block designBlock='wave wave1'></Block>
        <Block designBlock='wave wave2'></Block>
        <Block designBlock='wave wave3'></Block>
        <Block designBlock='wave wave4'></Block>
      </Block>
    </>
  );
};
