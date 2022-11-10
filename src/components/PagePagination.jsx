import React from 'react';
import { Button } from './Button';
import { Block } from './Block';
import { iconSlice } from '../utils/constants/contant';

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
      {/* // todo la prop "btnEvent" no me dice nada sobre lo que hace. Es un onClick? onFocus? onQue ? */}
      <Button
        typeButton='button'
        text='previous'
        btnEvent={handlePrevious}
        designButton='button btn-article-pagination'
        iconButton={iconSlice.left}
        iconButtonInfo={iconSlice.left}
        iconButtonStyle='icon__button--left icon__button--page'
      />

      {/* // todo la prop "btnEvent" no me dice nada sobre lo que hace. Es un onClick? onFocus? onQue ? */}
      <Button
        typeButton='button'
        text='next'
        btnEvent={handleNext}
        designButton='button btn-article-pagination'
        iconButton={iconSlice.rigth}
        iconButtonInfo={iconSlice.rigth}
        iconButtonStyle='icon__button--rigth icon__button--page'
      />
    </Block>
  );
};
