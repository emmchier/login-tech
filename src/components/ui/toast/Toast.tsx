import React, { FC } from 'react';

import { getIconByType } from '../../../utils';

import { Text } from '../../../components';
import { ToastContent } from './ToastStyles';

interface ToastTypes {
  type: 'error';
  message: string;
  fullWidth?: boolean;
}

export const Toast: FC<ToastTypes> = ({ type = 'error', message = '', fullWidth = false }) => (
  <ToastContent type={type} fullWidth={fullWidth}>
    {getIconByType(type)}
    <Text>{message}</Text>
  </ToastContent>
);
