import styled from 'styled-components';

type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColTypes {
  xs: Column;
  sm: Column;
  md: Column;
  lg: Column;
  xlg: Column;
  smOrder?: number;
}

const getBreackpoint = (bpt: Column) => {
  switch (bpt) {
    case 1:
      return `8.33333333%`;
    case 2:
      return `16.66666667%;`;
    case 3:
      return `25%;`;
    case 4:
      return `33.33333333%;`;
    case 5:
      return `41.66666667%;`;
    case 6:
      return `50%;`;
    case 7:
      return `58.33333333%;`;
    case 8:
      return `66.66666667%;`;
    case 9:
      return `75%;`;
    case 10:
      return `83.33333333%;`;
    case 11:
      return `91.66666667%;`;
    case 12:
      return `100%;`;
    default:
      return `100%;`;
  }
};

export const GridCol = styled.div<ColTypes>`
  display: flex;
  list-style: none;
  flex-grow: 0;
  flex-basis: ${({ xlg }) => getBreackpoint(xlg)};

  @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    flex-basis: ${({ lg }) => getBreackpoint(lg)};
  }
  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: ${({ md }) => getBreackpoint(md)};
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    flex-basis: ${({ sm }) => getBreackpoint(sm)};
    order: ${({ smOrder }) => smOrder};
  }
  @media only screen and (${({ theme }) => theme.breakpoints.smallMobile}) {
    flex-basis: ${({ xs }) => getBreackpoint(xs)};
  }
`;

export const ColContent = styled.div`
  width: 100%;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
  }
`;
