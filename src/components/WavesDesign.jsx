import '../assets/styles/waves.css';

export const WavesDesign = () => {
  // todo tienes un componente para los div
  // todo si usas un div sin contenido cierra de una <div /> queda mas limpio
  
  return (
    <>
      <div className='wave-main'>
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
        <div className='wave wave4'></div>
      </div>
    </>
  );
};
