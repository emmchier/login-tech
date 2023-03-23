import React, { FC } from 'react';

import { AnimationContainer, Overlay } from './LoadingScreenStyles';

interface LoadingScreenProps {
  isLoading?: boolean;
}

export const LoadingScreen: FC<LoadingScreenProps> = ({ isLoading = false }) => {
  return (
    <>
      {isLoading === true && (
        <Overlay>
          <AnimationContainer>
            <div></div>
            <div></div>
            <div></div>
          </AnimationContainer>
        </Overlay>
      )}
    </>
  );
};
