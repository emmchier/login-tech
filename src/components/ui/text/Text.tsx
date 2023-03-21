import React from 'react';
import { FCC } from '../../../types';

import { TextContent } from './TextStyles';

type TextProps = {
  variant?: 'b1' | 'b2';
  weight?: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';
  color?: 'primary' | 'secondary' | 'error';
  cap?: 'upper' | 'lower' | 'cap' | 'none';
};

export const Text: FCC<TextProps> = ({
  children,
  variant = 'b1',
  weight = 'bold',
  color = 'primary',
  cap = 'cap',
}) => {
  return (
    <TextContent variant={variant} weight={weight} color={color} cap={cap}>
      {children}
    </TextContent>
  );
};
