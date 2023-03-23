import styled, { css } from 'styled-components';

interface InputFieldProps {
  isError: boolean;
}

interface FieldProps {
  isAction?: boolean;
}

export const InputContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(2.5)};

  label,
  input {
    font-size: ${({ theme }) => theme.font.size.body[1].desk};
    line-height: ${({ theme }) => theme.font.lineHeight.body[1].desk};
  }

  .filter {
    display: none;
  }

  input[type='password'] {
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.font.weight.medium};

  span {
    font-family: ${({ theme }) => theme.font.family.encodeSans};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.error};
  }
`;

export const Input = styled.input<InputFieldProps>`
  width: 100%;
  height: ${({ theme }) => theme.spacing(10.5)};
  margin: ${({ theme }) => theme.spacing(1)} 0 ${({ theme }) => theme.spacing(2)} 0;
  border-radius: ${({ theme }) => theme.border.radius.main};
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  ${({ isError }) =>
    isError === true
      ? css`
          border: 1px solid ${({ theme }) => theme.color.error};
        `
      : css`
          border: 1px solid ${({ theme }) => theme.color.text.secondary};
        `}

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.active};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.text.secondary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
`;

export const SupportingTextContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)};

  p {
    font-family: ${({ theme }) => theme.font.family.encodeSans};
    font-size: ${({ theme }) => theme.font.size.body[2].desk};
    line-height: ${({ theme }) => theme.font.lineHeight.body[2].desk};
    font-weight: ${({ theme }) => theme.font.weight.light};
  }

  svg {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Field = styled.div<FieldProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  ${({ isAction }) =>
    isAction === true
      ? css`
          input {
            padding: 0 ${({ theme }) => theme.spacing(8)} 0 ${({ theme }) => theme.spacing(3)};
          }
        `
      : css`
          input {
            padding: 0 ${({ theme }) => theme.spacing(3)};
          }
        `}

  button {
    position: absolute;
    transform: translateY(-2px);
    margin-right: ${({ theme }) => theme.spacing(2)};

    svg {
      transform: scale(1.3);
    }

    &:hover {
      background: transparent;
    }
  }
`;
