import styled, { css, DefaultTheme } from 'styled-components';

type HeadingProps = {
  variant: 't1';
  weight: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';
  color: 'primary' | 'secondary' | 'error';
  cap: 'upper' | 'lower' | 'cap' | 'none';
};

const variantStyles = (theme: DefaultTheme, variant: string) =>
  ({
    t1: css`
      font-size: ${theme.font.size.title[1].desk};
      line-height: ${theme.font.lineHeight.title[1].desk};
      @media only screen and (${theme.breakpoints.tablet}) {
        font-size: ${theme.font.size.title[1].mob};
        line-height: ${theme.font.lineHeight.title[1].mob};
      }
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

export const HeadingContent = styled.div<HeadingProps>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-style: normal;
    padding: 0;
    margin: 0;
    ${({ theme, variant }) => variantStyles(theme, variant)};
    ${({ theme, weight }) => weightStyles(theme, weight)};
    ${({ theme, color }) => colorStyles(theme, color)};
    ${({ cap }) => capStyles(cap)};
  }
`;

export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const H4 = styled.h4``;

export const H5 = styled.h5``;

export const H6 = styled.h6``;
