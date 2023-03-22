import styled from 'styled-components';

export const InputContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.body[1].desk};
  line-height: ${({ theme }) => theme.font.lineHeight.body[1].desk};
  span {
    font-family: ${({ theme }) => theme.font.family.encodeSans};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.error};
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.spacing(10.5)};
  padding: 0 ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.color.text.secondary};
  border-radius: ${({ theme }) => theme.border.radius.main};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SupportingTextContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
`;
