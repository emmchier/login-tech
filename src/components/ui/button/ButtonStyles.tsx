import styled, { css } from 'styled-components';

interface ButtonProps {
  size: 'medium';
  variant: 'contained' | 'outlined' | 'link' | 'icon';
  fullWidth: boolean;
  isLoading: boolean;
}

const sizeStyles = (size: string) =>
  ({
    medium: css`
      height: ${({ theme }) => theme.spacing(10.5)};
      padding: 0 ${({ theme }) => theme.spacing(6)};
    `,
  }[size]);

const variantStyles = (variant: string) =>
  ({
    contained: css`
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.primary.main};
      border: 1px solid ${({ theme }) => theme.color.primary.main};
      border-radius: ${({ theme }) => theme.border.radius.main};
      box-shadow: none;

      &:hover {
        background: ${({ theme }) => theme.color.primary.light};
        border: 1px solid ${({ theme }) => theme.color.primary.light};
        box-shadow: ${({ theme }) => theme.elevation.primary.light};
      }

      &:active,
      &:focus {
        background: ${({ theme }) => theme.color.primary.dark};
        border: 1px solid ${({ theme }) => theme.color.primary.dark};
        box-shadow: ${({ theme }) => theme.elevation.primary.dark};
      }

      &:disabled {
        border: 1px solid ${({ theme }) => theme.color.primary.disabled};
        background: ${({ theme }) => theme.color.primary.disabled};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:active,
        &:focus {
          background: ${({ theme }) => theme.color.primary.main};
          border: 1px solid ${({ theme }) => theme.color.primary.main};
          border-radius: ${({ theme }) => theme.border.radius.main};
        }
      }
    `,
    outlined: css`
      color: ${({ theme }) => theme.color.primary.main};
      background: transparent;
      border: 1px solid ${({ theme }) => theme.color.primary.main};
      border-radius: ${({ theme }) => theme.border.radius.main};

      svg {
        filter: brightness(0) saturate(100%) invert(29%) sepia(20%) saturate(2294%)
          hue-rotate(264deg) brightness(91%) contrast(89%);
      }

      &:hover {
        background: ${({ theme }) => theme.color.primary.disabled};
      }

      &:active,
      &:focus {
        background: ${({ theme }) => theme.color.primary.background};
      }

      &:disabled {
        color: ${({ theme }) => theme.color.primary.disabled};
        border: 1px solid ${({ theme }) => theme.color.primary.disabled};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:active,
        &:focus {
          background: transparent;
        }
      }
    `,
    link: css`
      color: ${({ theme }) => theme.color.text.primary};
      background: transparent;
      border: none;
      padding: none;
      text-decoration: underline;

      &:hover {
        opacity: 0.8;
      }

      &:active,
      &:focus {
        color: ${({ theme }) => theme.color.black};
      }

      &:disabled {
        opacity: 0.5;
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:active,
        &:focus {
          color: ${({ theme }) => theme.color.text.primary};
        }
      }
    `,
    icon: css`
      color: transparent;
      background: transparent;
      border: none;
      width: ${({ theme }) => theme.spacing(8)};
      height: ${({ theme }) => theme.spacing(8)};
      border-radius: ${({ theme }) => theme.border.radius.full};
      padding: ${({ theme }) => theme.spacing(2)};

      &:hover {
        background: ${({ theme }) => theme.color.primary.disabled};
      }

      &:disabled {
        opacity: 0.5;
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:active,
        &:focus {
          background: transparent;
        }
      }
    `,
  }[variant]);

export const ButtonContent = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  transition: 0.2s ease-in-out;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  ${({ size }) => sizeStyles(size)};
  ${({ variant }) => variantStyles(variant)};
  ${({ isLoading }) =>
    isLoading === true &&
    css`
      cursor: none;
      pointer-events: none;
      padding-left: ${({ theme }) => theme.spacing(3)};

      svg {
        margin: ${({ theme }) => theme.spacing(2)};
      }
    `};

  &:hover,
  &:active,
  &:focus {
    transition: 0.2s ease-in-out;

    /* svg {
      filter: brightness(0) invert(1);
    } */
  }

  &:disabled {
    cursor: inherit;
    pointer-events: none;

    svg {
      filter: brightness(0) saturate(100%) invert(37%) sepia(62%) saturate(1324%) hue-rotate(221deg)
        brightness(91%) contrast(107%);
    }
  }
`;
