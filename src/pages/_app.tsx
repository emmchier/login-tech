import type { AppProps } from 'next/app';
import { MainLayout } from '../components/layouts/MainLayout';
import { StyledThemeProvider } from '../providers/StyledThemeProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StyledThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StyledThemeProvider>
  );
};

export default App;
