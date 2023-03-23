import React, { FC } from 'react';

import Image from 'next/legacy/image';
import { ImgContent } from './ImgStyles';

interface ImgProps {
  image: string;
  alt: string;
  width?: string;
  height?: string;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
}

export const Img: FC<ImgProps> = ({
  image = '',
  alt = '',
  width = '100%',
  height = '100%',
  position = 'relative',
}) => {
  return (
    <ImgContent width={width} height={height} position={position}>
      <Image
        src={image ? image : ''}
        alt={alt}
        height="0"
        width="0"
        layout="responsive"
        objectFit="contain"
        priority
      />
    </ImgContent>
  );
};
