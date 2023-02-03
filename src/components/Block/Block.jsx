import React from 'react';

const Block = ({ designBlock, onClickEvent, children, blockId }) => {
  return React.createElement('div', { className: designBlock, onClick: onClickEvent, id: blockId }, children);
};

export default Block;
