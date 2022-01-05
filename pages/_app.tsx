import 'tailwindcss/tailwind.css';
import NProgress from 'nprogress';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import { Router, useRouter } from 'next/router';
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
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
        <meta name="application-name" content="Zachary Collazo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zachary Collazo" />
        <meta name="description" content="My personal portfolio." />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#4b5563" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#4b5563" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        titleTemplate="%s | Zachary Collazo"
        defaultTitle="Zachary Collazo"
        description="My personal portfolio"
        canonical={`https://ztcollazo.verce.app${router.asPath}`}
        openGraph={{
          url: `https://ztcollazo.vercel.app${router.asPath}`,
          title: 'Zachary Collazo',
          description: 'My personal portfolio',
        }}
      />
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
