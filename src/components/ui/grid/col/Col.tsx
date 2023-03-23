import React from 'react';
import { FCC } from '../../../../types';

import { ColContent, ColTypes, GridCol } from './ColStyles';

export const Col: FCC<ColTypes> = ({ children, xs, sm, md, lg, xlg, smOrder }) => (
  <GridCol xs={xs} sm={sm} md={md} lg={lg} xlg={xlg} smOrder={smOrder}>
    <ColContent>{children}</ColContent>
  </GridCol>
);
