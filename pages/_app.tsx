import React from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
