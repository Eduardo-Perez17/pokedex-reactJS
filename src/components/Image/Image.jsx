import React from 'react';

const Image = ({ image, alternativeText, designImage, eventImage }) => {
  return React.createElement('img', { src: image, alt: alternativeText, className: designImage, onClick: eventImage });
};

export default Image;
