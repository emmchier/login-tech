import React from 'react';
import { FCC } from '../types';

import { ThemeProvider as MyStyledThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyles';
import { theme } from '../styles/theme';

export const StyledThemeProvider: FCC = ({ children }) => (
  <MyStyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </MyStyledThemeProvider>
);
