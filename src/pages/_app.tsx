import { AppProps } from 'next/dist/next-server/lib/router/router'
import React, { FC } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SEProvider from '../SEProvider/SEProvider'
import Header from '../components/layout/menu-top'
import './app.scss'

const Noop: FC = ({ children }) => <>{children}</>

const theme = createMuiTheme({
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
  const Layout = (Component as any).Layout || Noop
  return (
    <SEProvider>
      <ThemeProvider theme={theme}>
      <Layout pageProps={pageProps}>
        <Header {...pageProps} />
        <div className='content-bg'>
          <Component {...pageProps} />
        </div>
      </Layout>
      </ThemeProvider>
    </SEProvider>
  )
}
