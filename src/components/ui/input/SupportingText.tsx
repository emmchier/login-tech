import React, { FC } from 'react';

import { Text } from '../../../components';
import { getIconByType } from '../../../utils';
import { SupportingTextContent } from './InputStyles';

interface SupportingTextTypes {
  type?: 'error';
  message?: string;
}

export const SupportingText: FC<SupportingTextTypes> = ({ type = 'error', message = '' }) => (
  <SupportingTextContent>
    {getIconByType(type)}
    <Text color={type}>{message}</Text>
  </SupportingTextContent>
);
