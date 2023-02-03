import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from '@mui/material';
import Header from '../components/layout/menu-top';
import '../styles/colors.css';
import { theme } from '../styles/materialUI';
import { SEProvider } from '@/SEProvider/SEProvider';
import { GlobalStyle } from '@/styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SEProvider {...pageProps}>
          <Header {...pageProps} />
          <div className="content-bg">
            <Component {...pageProps} />
          </div>
        </SEProvider>
      </ThemeProvider>
    </>
  );
}
