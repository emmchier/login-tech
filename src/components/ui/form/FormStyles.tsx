import styled from 'styled-components';

export const Form = styled.form`
  width: 50%;
`;

export const InputGroup = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const LoginActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button:nth-child(2) {
    color: ${({ theme }) => theme.color.primary.main};
    margin-top: ${({ theme }) => theme.spacing(14)};
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
