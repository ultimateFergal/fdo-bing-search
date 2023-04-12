import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Number.POSITIVE_INFINITY,
            retry: 1,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false
          }
        }
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>);
}
