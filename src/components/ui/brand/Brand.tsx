import React, { FC } from 'react';

import { BrandLogo, Heading } from '../../../components';

import { BrandContent } from './BrandStyles';

export const Brand: FC = () => (
  <BrandContent>
    <BrandLogo />
    <Heading element="h1" variant="t1" cap="upper">
      Tek<span>BNK</span>
    </Heading>
  </BrandContent>
);
