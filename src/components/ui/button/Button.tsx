/* 
/* Don't mix "icon" variant with isLoading boolean
*/

import { FCC } from '../../../types';

import { Animation } from '../../../components';
import { LoadingIcon } from '../svg';

import { ButtonContent } from './ButtonStyles';

interface ButtonTypes {
  type?: 'submit' | 'reset' | 'button';
  size?: 'medium';
  variant?: 'contained' | 'outlined' | 'link' | 'icon';
  fullWidth?: boolean;
  ariaLabel: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (e: any) => any;
}

export const Button: FCC<ButtonTypes> = ({
  children,
  type = 'button',
  size = 'medium',
  variant = 'contained',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  ariaLabel = '',
  onClick,
}) => (
  <ButtonContent
    type={type}
    size={size}
    variant={variant}
    fullWidth={fullWidth}
    disabled={disabled}
    aria-label={ariaLabel}
    onClick={onClick}
    isLoading={isLoading}
  >
    {variant !== 'icon' && isLoading === true && (
      <Animation effect="spinner">
        <LoadingIcon />
      </Animation>
    )}
    {children}
  </ButtonContent>
);
