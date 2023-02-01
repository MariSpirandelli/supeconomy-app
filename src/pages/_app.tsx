import type { AppProps } from 'next/app';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from '../components/layout/menu-top';
import './app.scss';
import { SEProvider } from '@/SEProvider/SEProvider';

const theme = createTheme({
  palette: {
    primary: {
      light: '#76c452',
      main: '#439322',
      dark: '#006400',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e0ff80',
      main: '#ABE64E',
      dark: '#78b412',
      contrastText: '#000',
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SEProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <Header {...pageProps} />
        <div className="content-bg">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </SEProvider>
  );
}
