import { Lato, Encode_Sans, Rubik } from 'next/font/google';

const lato = Lato({
  weight: ['400', '700'], // 700, not 600
  subsets: ['latin'],
});

const encodeSans = Encode_Sans({
  weight: ['400'],
  subsets: ['latin'],
});

const rubik = Rubik({
  weight: ['300', '600'],
  subsets: ['latin'],
});

export const theme = {
  color: {
    primary: {
      light: '#A54F93',
      main: '#8A3879',
      dark: '#78306B',
      disabled: '#ECCAE5',
      background: '#E1C6DC',
    },
    secondary: {
      light: '#FEE7E9',
      main: '#FFB1B8',
    },
    text: {
      primary: '#3B3B3B',
      secondary: '#939393',
    },
    error: '#D52F1A',
    active: '#649FD6',
    white: '#FFFFFF',
    grey: '#696969',
    background: {
      overlay: 'rgba(255, 255, 255, 0.85)',
    },
  },
  font: {
    family: {
      lato: lato.style.fontFamily,
      encodeSans: encodeSans.style.fontFamily,
      rubik: rubik.style.fontFamily,
    },
    size: {
      title: {
        1: {
          desk: '1.625rem', // 26px
          mob: '1.5rem', // 24px
        },
      },
      body: {
        1: {
          desk: '1rem', // 16px
        },
        2: {
          desk: '0.875rem', // 14px
        },
      },
    },
    lineHeight: {
      title: {
        1: {
          desk: '1.95rem', // 31.2px
          mob: '1.8px', // 28.8px
        },
      },
      body: {
        1: {
          desk: '1.2rem', // 19.2px
        },
        2: {
          desk: '1.313rem', // 21px
        },
      },
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  spacing: (pixel: number) => `${0.25 * pixel}rem`,
  elevation: {
    main: {
      light: '0px -14px 16px rgba(0, 0, 0, 0.05)',
      dark: '0px 4px 9px rgba(0, 0, 0, 0.08)',
    },
    primary: {
      light: '0px 0px 6px rgba(165, 79, 147, 0.85)',
      dark: '0px 0px 6px rgba(120, 48, 107, 0.85)',
    },
  },
  transition: {
    main: '0.1s ease-in-out',
  },
  border: {
    radius: {
      small: '6px',
      main: '7px',
      large: '40px',
    },
  },
  breakpoints: {
    smallMobile: 'max-width: 479px',
    mobile: 'max-width: 767px',
    tablet: 'max-width: 991px',
    tabletLandscape: 'max-width: 1199px',
    desktop: 'max-width: 1700px',
  },
};
