import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const InputGroup = styled.div`
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacing(6)};

    input {
      margin-bottom: 0;
    }
    button {
      transform: translateY(1px) !important;
    }
  }
`;

export const LoginActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button:nth-child(2) {
    color: ${({ theme }) => theme.color.primary.main};
    margin-top: ${({ theme }) => theme.spacing(10)};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-top: ${({ theme }) => theme.spacing(4)};
    }
  }
`;

export const Alerts = styled.div`
  margin: ${({ theme }) => theme.spacing(6)} 0;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin: ${({ theme }) => theme.spacing(6)} 0;
  }
`;

export const RecoverActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button:nth-child(1) {
    margin-right: ${({ theme }) => theme.spacing(1.25)};
  }

  button:nth-child(2) {
    margin-left: ${({ theme }) => theme.spacing(1.25)};
  }
`;
