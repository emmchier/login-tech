import React from 'react';
import Head from 'next/head';

import { FCC } from '../../../types';
import { useRouter } from 'next/router';

import { PageTypes } from '../../../interfaces';
import { Animation } from '../animation';

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Page: FCC<PageTypes> = ({ children, title, description, keywords }) => {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title && title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow" />
        <meta name="owner" content="Emmanuel Chierchie" />
        <meta httpEquiv="content-lenguage" content="es-ES" />
        <meta name="distribution" content="global" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${origin}/images${asPath === '/' ? '/home' : asPath}-tag.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Animation effect="fadeIn">{children}</Animation>
    </>
  );
};
