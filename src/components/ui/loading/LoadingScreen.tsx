import React, { FC } from 'react';
import { Text } from '../text';
import { Overlay } from './LoadingScreenStyles';

interface LoadingScreenProps {
  isLoading?: boolean;
}

export const LoadingScreen: FC<LoadingScreenProps> = ({ isLoading = false }) => {
  return (
    <>
      {isLoading === true && (
        <Overlay>
          <Text>Loading...</Text>
        </Overlay>
      )}
    </>
  );
};
