import React, { FC } from 'react';

import { Text, WarningIcon } from '../../../components';
import { SupportingTextContent } from './InputStyles';

interface SupportingTextTypes {
  type?: 'error';
  message?: string;
}

export const SupportingText: FC<SupportingTextTypes> = ({ type = 'error', message = '' }) => {
  const getIconByType = (type: string) => {
    if (type === 'error') return <WarningIcon />;
    return '';
  };

  return (
    <SupportingTextContent>
      {getIconByType(type)}
      <Text color={type}>{message}</Text>
    </SupportingTextContent>
  );
};
