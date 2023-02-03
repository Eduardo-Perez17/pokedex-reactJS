import React from 'react';

const ContainerParagraph = ({ designContainerParagraph, children }) => {
  return React.createElement('p', { className: designContainerParagraph }, children);
};

export default ContainerParagraph;
