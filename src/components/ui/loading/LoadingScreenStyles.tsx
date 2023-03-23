import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.background.overlay};
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @keyframes scaling {
    0%,
    100% {
      transform: scale(0.4);
    }
    40% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
  }
  div {
    animation: scaling 1s ease-in-out infinite;
    transform: scale(0);
    height: ${({ theme }) => theme.spacing(7)};
    width: ${({ theme }) => theme.spacing(7)};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.primary.main};
    display: inline-block;
    margin: ${({ theme }) => theme.spacing(2)};
  }
  div:nth-child(0) {
    animation-delay: 0.2s;
  }
  div:nth-child(1) {
    animation-delay: 0.8s;
  }
  div:nth-child(2) {
    animation-delay: 0.4s;
  }
`;
