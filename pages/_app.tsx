import 'tailwindcss/tailwind.css';
import NProgress from 'nprogress';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import { Router } from 'next/router';
import colors from 'tailwindcss/colors';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import 'nprogress/nprogress.css';

NProgress.configure({
  easing: 'ease-in-out',
  showSpinner: false,
  template: `<div style="background: ${colors.gray[300]};" class="bar" role="bar"><div style="box-shadow: 0 0 10px ${colors.gray[300]}, 0 0 5px ${colors.gray[300]};" class="peg"></div></div>`,
});

Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <div style={{ zIndex: -1 }} className="flex text-center md:text-left bg-white dark:bg-gray-900 flex-col min-w-full min-h-screen py-2">
        <div className="relative top-0 left-0 right-0 z-50">
          <Header />
        </div>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <BackToTop />
        <div className="relative bottom-0 left-0 right-0 -mb-2">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
