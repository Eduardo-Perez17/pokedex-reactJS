export const Image = ({ image, alternativeText, designImage }) => {
  return <img src={image} alt={alternativeText} className={designImage} />;
};
