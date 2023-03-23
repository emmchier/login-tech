import React, { FC } from 'react';

import { BrandLogo, Heading } from '../../../components';

import { BrandContent } from './BrandStyles';

export const Brand: FC = () => (
  <BrandContent>
    <BrandLogo />
    <Heading variant="t1" cap="upper">
      <span>Tek</span>BNK
    </Heading>
  </BrandContent>
);
