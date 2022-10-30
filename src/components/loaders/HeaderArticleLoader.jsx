import React from 'react';
import ContentLoader from 'react-content-loader';
import { Block } from '../Block';

const HeaderArticleLoader = props => (
  <Block designBlock='loader'>
    <ContentLoader speed={2} width={320} height={500} viewBox='0 0 400 160' backgroundColor='#f3f3f3' foregroundColor='#ecebeb' {...props}>
      <rect x='192' y='5' rx='3' ry='3' width='50' height='6' />
      <rect x='192' y='18' rx='3' ry='3' width='52' height='6' />
      <rect x='13' y='40' rx='3' ry='3' width='410' height='6' />
      <rect x='14' y='54' rx='3' ry='3' width='380' height='6' />
      <rect x='13' y='72' rx='3' ry='3' width='178' height='6' />
      <circle cx='220' cy='127' r='31' />
    </ContentLoader>
  </Block>
);

export default HeaderArticleLoader;
