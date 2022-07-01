import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Head from 'next/head'
import GlobalStyle from '../styles/global'

const MyRepositories: FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          {/* Favicons */}
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        </Head>
        <Component {...pageProps}/>
        <GlobalStyle/>
      </ThemeProvider>
  )
}

export default MyRepositories