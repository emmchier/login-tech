import styled, { css } from 'styled-components';

interface ToastProps {
  type: 'error';
  fullWidth: boolean;
}

const typeStyles = (type: string) =>
  ({
    error: css`
      background: ${({ theme }) => theme.color.secondary.light};
      border: 1px solid ${({ theme }) => theme.color.secondary.main};
    `,
  }[type]);

export const ToastContent = styled.div<ToastProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.border.radius.main};
  ${({ fullWidth }) =>
    fullWidth === true
      ? css`
          width: 100%;
        `
      : css`
          width: 360px;
        `}
  ${({ type }) => typeStyles(type)};

  svg {
    width: ${({ theme }) => theme.spacing(5.5)};
    height: ${({ theme }) => theme.spacing(5.5)};
    margin-right: ${({ theme }) => theme.spacing(4)};
  }

  p {
    font-family: ${({ theme }) => theme.font.family.encodeSans};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.body[2].desk};
    line-height: ${({ theme }) => theme.font.lineHeight.body[2].desk};
  }
`;
