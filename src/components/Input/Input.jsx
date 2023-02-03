import React from 'react';

const Input = ({ typeInput, designInput, valueInput, onChangeEvent, nameInput }) => {
  return React.createElement('input', {
    type: typeInput,
    className: designInput,
    value: valueInput,
    onChange: onChangeEvent,
    name: nameInput,
  });
};

export default Input;
