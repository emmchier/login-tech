import styled, { css } from 'styled-components';

interface ContainerProps {
  size: 'sm' | 'md' | 'lg' | 'none';
}

const styledSizes = (size: string) =>
  ({
    sm: css`
      margin: 0 ${({ theme }) => theme.spacing(20)};

      @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
        margin: 0 ${({ theme }) => theme.spacing(20)};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        margin: 0 ${({ theme }) => theme.spacing(60)};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 auto;
      }
    `,
    md: css`
      margin: 0 ${({ theme }) => theme.spacing(20)};

      @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
        margin: 0 ${({ theme }) => theme.spacing(15)};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 auto;
        padding: 0 ${({ theme }) => theme.spacing(5)};
      }
    `,
    lg: css`
      margin: 0 ${({ theme }) => theme.spacing(8)};

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 auto;
        padding: 0 ${({ theme }) => theme.spacing(5)};
      }
    `,
    none: css`
      margin: 0;
    `,
  }[size]);

export const ContainerContent = styled.div<ContainerProps>`
  width: auto;
  ${({ size }) => styledSizes(size)};
`;
