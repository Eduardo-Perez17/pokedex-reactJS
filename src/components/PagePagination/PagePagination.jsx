import { ICON_SLIDE } from '../../utils/images';

import { Button } from '../Button';
import { Block } from '../Block';
import { Image } from '../Image';

export const PagePagination = ({ page, functionPage }) => {
  const handleNext = () => {
    const nextPage = Math.max(page + 1, 0);
    functionPage(nextPage);
  };

  const handlePrevious = () => {
    const nextPage = Math.min(page - 1, 12);
    functionPage(nextPage);
  };

  return (
    <Block designBlock='main__button--page'>
      <Button typeButton='button' onClickEvent={handlePrevious} designButton='button btn-article-pagination'>
        <Image
          image={ICON_SLIDE.left}
          alternativeText={ICON_SLIDE.left}
          designImage='icon__button--left icon__button--page'
        />
      </Button>

      <Button typeButton='button' onClickEvent={handleNext} designButton='button btn-article-pagination'>
        <Image
          image={ICON_SLIDE.rigth}
          alternativeText={ICON_SLIDE.rigth}
          designImage='icon__button--left icon__button--page'
        />
      </Button>
    </Block>
  );
};
