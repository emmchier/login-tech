import styled from 'styled-components';

interface CustomImageProps {
  width: string;
  height: string;
  position: string;
}

export const ImgContent = styled.div<CustomImageProps>`
  position: ${({ position }) => position};
  span {
    width: ${({ width }) => width} !important;
    height: ${({ height }) => height} !important;
  }
`;
