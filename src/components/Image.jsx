export const Image = props => {
  return (
    <img
      src={props.image}
      alt={props.alternativeText}
      className={props.designImage}
    />
  );
};
