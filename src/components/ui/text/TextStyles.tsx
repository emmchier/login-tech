import styled, { css, DefaultTheme } from 'styled-components';

type TextProps = {
  variant: 'b1' | 'b2';
  weight: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';
  color: 'primary' | 'secondary' | 'error';
  cap: 'upper' | 'lower' | 'cap' | 'none';
};

const variantStyles = (theme: DefaultTheme, variant: string) =>
  ({
    b1: css`
      font-size: ${theme.font.size.body[1].desk};
      line-height: ${theme.font.lineHeight.body[1].desk};
    `,
  }[variant]);

const weightStyles = (theme: DefaultTheme, weight: string) =>
  ({
    light: css`
      font-weight: ${theme.font.weight.light};
    `,
    regular: css`
      font-weight: ${theme.font.weight.regular};
    `,
    medium: css`
      font-weight: ${theme.font.weight.medium};
    `,
    semiBold: css`
      font-weight: ${theme.font.weight.semiBold};
    `,
    bold: css`
      font-weight: ${theme.font.weight.bold};
    `,
  }[weight]);

const capStyles = (cap: string) =>
  ({
    upper: css`
      text-transform: uppercase;
    `,
    lower: css`
      text-transform: lowercase;
    `,
    cap: css`
      text-transform: capitalize;
    `,
    none: css`
      text-transform: none;
    `,
  }[cap]);

const colorStyles = (theme: DefaultTheme, color: string) =>
  ({
    primary: css`
      color: ${theme.color.text.primary};
    `,
    secondary: css`
      color: ${theme.color.text.secondary};
    `,
    error: css`
      color: ${theme.color.error};
    `,
  }[color]);

export const TextContent = styled.p<TextProps>`
  font-style: normal;
  padding: 0;
  margin: 0;
  ${({ theme, variant }) => variantStyles(theme, variant)};
  ${({ theme, weight }) => weightStyles(theme, weight)};
  ${({ theme, color }) => colorStyles(theme, color)};
  ${({ cap }) => capStyles(cap)};
`;
