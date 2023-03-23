import React from 'react';
import { FCC } from '../../../types';

import { H1, H2, H3, H4, H5, H6, HeadingContent } from './HeadingStyles';

type HeadingProps = {
  variant?: 't1';
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';
  color?: 'primary' | 'secondary' | 'error';
  cap?: 'upper' | 'lower' | 'cap' | 'none';
};

export const Heading: FCC<HeadingProps> = ({
  children,
  variant = 't1',
  element = 'h2',
  weight = 'bold',
  color = 'primary',
  cap = 'none',
}) => {
  const setHeading = () => {
    switch (element) {
      case 'h1':
        return <H1>{children}</H1>;
      case 'h2':
        return <H2>{children}</H2>;
      case 'h3':
        return <H3>{children}</H3>;
      case 'h4':
        return <H4>{children}</H4>;
      case 'h5':
        return <H5>{children}</H5>;
      case 'h6':
        return <H6>{children}</H6>;
      default:
        return <H2>{children}</H2>;
    }
  };
  return (
    <HeadingContent variant={variant} weight={weight} color={color} cap={cap}>
      {setHeading()}
    </HeadingContent>
  );
};
