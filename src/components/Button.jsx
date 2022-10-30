import { Image } from './Image';

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
