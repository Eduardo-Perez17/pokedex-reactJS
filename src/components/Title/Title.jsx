import React from 'react';

const Title = ({ size, children }) => {
  const sizeElement = {
    xl: 'h1',
    lg: 'h2',
    md: 'h3',
    sm: 'h4',
    xs: 'h5',
  };
  return React.createElement(sizeElement[size] || 'h1', {}, children);
};

export default Title;
