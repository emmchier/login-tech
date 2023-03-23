import React from 'react';
import { FCC } from '../../../types';

import { Container } from '../../../components';

import SectionContent from './SectionStyles';

interface SectionTypes {
  auto?: boolean;
  container?: 'sm' | 'md' | 'lg' | 'none';
  padding?: string;
}

export const Section: FCC<SectionTypes> = ({
  children,
  auto = true,
  container = 'none',
  padding = '0',
}) => {
  return (
    <SectionContent auto={auto} padding={padding}>
      <Container size={container}>{children}</Container>
    </SectionContent>
  );
};
