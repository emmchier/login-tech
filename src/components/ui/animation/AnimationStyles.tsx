import styled, { css, keyframes } from 'styled-components';

interface AnimationProps {
  effect: 'fadeIn' | 'spinner' | 'none';
}

const animationStyles = (effect: string) =>
  ({
    fadeIn: css`
      -webkit-animation: ${fadeIn} 0.3s;
      -moz-animation: ${fadeIn} 0.3s;
      -ms-animation: ${fadeIn} 0.3s;
      -o-animation: ${fadeIn} 0.3s;
      animation: ${fadeIn} 0.3s;
    `,
    spinner: css`
      -webkit-animation: ${spinner} 0.8s linear infinite;
      -moz-animation: ${spinner} 0.8s linear infinite;
      -ms-animation: ${spinner} 0.8s linear infinite;
      -o-animation: ${spinner} 0.8s linear infinite;
      animation: ${spinner} 0.8s linear infinite;
    `,
    none: css`
      animation: none;
    `,
  }[effect]);

export const AnimationContent = styled.span<AnimationProps>`
  ${({ effect }) => animationStyles(effect)};
`;

export const fadeIn = keyframes`
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
`;

export const spinner = keyframes`
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
`;
