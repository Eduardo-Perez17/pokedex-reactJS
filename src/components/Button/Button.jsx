import React from 'react';

const Button = ({ typeButton, designButton, onClickEvent, children }) => {
  return React.createElement('button', { type: typeButton, className: designButton, onClick: onClickEvent }, children);
};

export default Button;
