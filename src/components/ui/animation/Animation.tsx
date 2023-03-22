import React from 'react';
import { FCC } from '../../../types';
import { AnimationContent } from './AnimationStyles';

interface AnimationProps {
  effect?: 'spinner' | 'none';
}

export const Animation: FCC<AnimationProps> = ({ children, effect = 'none' }) => (
  <AnimationContent effect={effect}>{children}</AnimationContent>
);
