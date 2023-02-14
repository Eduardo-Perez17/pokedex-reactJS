import { ICON_TOP } from '../../utils/images';

import { LinkHook } from '../LinkHook';
import { Image } from '../Image';

const ReturnTop = () => {
  return (
    <LinkHook linkDesign='main-top' hook='#header'>
      <Image image={ICON_TOP.image} alternativeText={ICON_TOP.alt} />
    </LinkHook>
  );
};

export default ReturnTop;
