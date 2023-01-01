import React from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import AppLayout from 'components/layout/AppLayout';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <AppLayout>
            <GlobalStyle />
            <Component {...pageProps} />
          </AppLayout>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
