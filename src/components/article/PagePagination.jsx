import React from 'react';
import { iconSlice } from '../../utils/constants/constant';

import { Button } from '../Button';
import { Block } from '../Block';
import { Image } from '../Image';

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
      <Button typeButton='button' onClick={handlePrevious} designButton='button btn-article-pagination'>
        <Image image={iconSlice.left} alternativeText={iconSlice.left} designImage='icon__button--left icon__button--page' />
        previous
      </Button>

      <Button typeButton='button' onClick={handleNext} designButton='button btn-article-pagination'>
        next
        <Image image={iconSlice.rigth} alternativeText={iconSlice.rigth} designImage='icon__button--left icon__button--page' />
      </Button>
    </Block>
  );
};
