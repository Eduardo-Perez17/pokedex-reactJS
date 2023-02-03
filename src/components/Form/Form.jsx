import React from 'react';

const Form = ({ children, formStyle, formEventSubmit }) => {
  return React.createElement('form', { className: formStyle, onSubmit: formEventSubmit }, children);
};

export default Form;
