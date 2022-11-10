import { Image } from './Image';
// todo el contenido del boton deberia de ser un children y asi es mas flexible el contenido que va mostrar
// todo de esta manera estas obligado a que la imagen siempre vaya despues del texto y hay casos donde la imagen va antes del texto
export const Button = props => {
  return (
    <>
      <button
        type={props.typeButton}
        className={props.designButton}
        onClick={props.btnEvent}
      >
        {props.text}
        <Image
          image={props.iconButton}
          alternativeText={props.iconButtonInfo}
          designImage={props.iconButtonStyle}
        />
      </button>
    </>
  );
};
