import 'tailwindcss/tailwind.css'
import colors from "tailwindcss/colors"
import NextNProgress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import Head from "next/head"
import { ThemeProvider } from 'next-themes'
import "../styles/globals.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <NextNProgress color={colors.gray[400]} />
      <div className="flex text-center md:text-left absolute top-0 left-0 right-0 bg-white dark:bg-gray-800 flex-col items-stretch min-w-full min-h-full py-2">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
