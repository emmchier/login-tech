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

  h1 {
    font-family: ${({ theme }) => theme.font.family.rubik};
    font-weight: ${({ theme }) => theme.font.weight.light};

    span {
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing(4)};
    margin-bottom: 0;
    position: relative;
  }
`;
