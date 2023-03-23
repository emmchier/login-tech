import React, { FC } from 'react';

import { getIconByType } from '../../../utils';

import { Text } from '../../../components';

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
