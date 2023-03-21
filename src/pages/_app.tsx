import type { AppProps } from 'next/app';
import { StyledThemeProvider } from '../providers/StyledThemeProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StyledThemeProvider>
      <Component {...pageProps} />
    </StyledThemeProvider>
  );
};

export default App;
