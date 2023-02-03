import React from 'react';

const Image = ({ image, alternativeText, designImage }) => {
  return React.createElement('img', { src: image, alt: alternativeText, className: designImage });
};

export default Image;
