import Head from 'next/head';

const Page500 = () => (
  <>
    <Head>
      <title>500 - Internal server error | Zachary Collazo</title>
    </Head>
    <main className="flex flex-col min-h-[77vh] bottom-0 top-0 flex-wrap flex-1 p-16 font-mono uppercase">
      <h1 className="text-center text-8xl animate-pulse">500</h1>
      <div className="mt-10 text-center">
        <h2 className="md:text-4xl text-3xl font-extrabold">You&apos;re seeing this because something went wrong.</h2>
        <h2 className="md:text-3xl text-2xl font-extralight">And no, it&apos;s not you&apos;re fault.</h2>
        <h3 className="md:text-xl text-lg font-thin">AKA Internal Server Error</h3>
      </div>
    </main>
  </>
);

export default Page500;
