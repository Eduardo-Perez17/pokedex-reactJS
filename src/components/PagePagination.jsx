import React from 'react';
import { Button } from './Button';
import { Block } from './Block';

import left from '../assets/img/left.png';
import rigth from '../assets/img/right.png';

export const PagePagination = ({ page, functionPage }) => {
  const handleNext = () => {
    const next_page = Math.max(page + 1, 0);
    functionPage(next_page);
  };

  const handlePrevious = () => {
    const next_page = Math.min(page - 1, 12);
    functionPage(next_page);
  };

  return (
    <Block designBlock='main__button--page'>
      <Button text='previous' btnEvent={handlePrevious} designButton='button btn-article-pagination' iconButton={left} iconButtonInfo={left} iconButtonStyle='icon__button--left icon__button--page' />
      <Button text='next' btnEvent={handleNext} designButton='button btn-article-pagination' iconButton={rigth} iconButtonInfo={rigth} iconButtonStyle='icon__button--rigth icon__button--page' />
    </Block>
  );
};
