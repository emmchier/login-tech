import React, { FC } from 'react';

import { getIconByType } from '../../../utils';

import { Text } from '../../../components';
import { ToastContent } from './ToastStyles';

interface ToastTypes {
  type: 'error';
  message: string;
}

export const Toast: FC<ToastTypes> = ({
  type = 'error',
  message = 'El nombre de usuario o la contraseña son incorrectos',
}) => {
  return (
    <ToastContent type={type}>
      {getIconByType(type)}
      <Text>{message}</Text>
    </ToastContent>
  );
};
