import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 360px;

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
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
  margin-top: ${({ theme }) => theme.spacing(4)};

  button:nth-child(2) {
    color: ${({ theme }) => theme.color.primary.main};
    margin-top: ${({ theme }) => theme.spacing(10)};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-top: ${({ theme }) => theme.spacing(4)};
    }
  }
`;

export const Alerts = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;

export const RecoverActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(20)};

  button:nth-child(1) {
    margin-right: ${({ theme }) => theme.spacing(1.25)};
  }

  button:nth-child(2) {
    margin-left: ${({ theme }) => theme.spacing(1.25)};
  }
`;
