import React from 'react';

const Link = ({ hook, targetValue, relValue, linkDesign, children }) => {
  return React.createElement('a', { href: hook, target: targetValue, rel: relValue, className: linkDesign }, children);
};

export default Link;
