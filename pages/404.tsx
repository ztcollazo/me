import Head from 'next/head';
import u2 from 'public/u2.png';

const Page404 = () => (
  <>
    <Head>
      <title>404 - Page not found | Zachary Collazo</title>
    </Head>
    <main className="uppercase min-h-screen mt-5 font-extrabold font-mono bg-no-repeat absolute w-full h-full" style={{ backgroundImage: `url("${u2}")`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
      <h1 className="text-8xl text-white absolute md:left-28 left-4 animate-pulse bottom-1/3 md:bottom-28">404</h1>
      <h1 className="text-white absolute bottom-10 md:left-20 left-0 text-4xl">Cause I still haven&apos;t found what you&apos;re looking for</h1>
    </main>
  </>
);

export default Page404;
