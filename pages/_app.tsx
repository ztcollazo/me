import 'tailwindcss/tailwind.css'
import colors from "tailwindcss/colors"
import NextNProgress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import Head from "next/head"
import ThemeProvider from '../context/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress color={colors.blue[300]} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
