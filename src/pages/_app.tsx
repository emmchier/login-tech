import type { AppProps } from 'next/app';

import { MainLayout } from '../components/layouts/MainLayout';
import { StyledThemeProvider } from '../providers/StyledThemeProvider';
import { UIProvider } from '../providers/UIContextProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StyledThemeProvider>
      <UIProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </UIProvider>
    </StyledThemeProvider>
  );
};

export default App;
