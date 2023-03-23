import styled from 'styled-components';

export const BrandContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: ${({ theme }) => theme.spacing(6)} 0;

  svg {
    width: ${({ theme }) => theme.spacing(10)};
    height: ${({ theme }) => theme.spacing(10)};
    margin-right: ${({ theme }) => theme.spacing(1)};
  }

  h2 {
    font-family: ${({ theme }) => theme.font.family.rubik};

    span {
      font-weight: ${({ theme }) => theme.font.weight.light};
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
  }
`;
