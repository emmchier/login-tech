import styled, { css } from 'styled-components';

interface AnimationProps {
  effect: 'spinner' | 'none';
}

const animationStyles = (effect: string) =>
  ({
    spinner: css`
      animation: spinner 0.8s linear infinite;

      @keyframes spinner {
        from {
          -ms-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -ms-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    `,
    none: css`
      animation: none;
    `,
  }[effect]);

export const AnimationContent = styled.span<AnimationProps>`
  ${({ effect }) => animationStyles(effect)};
`;
