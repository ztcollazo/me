import Link from 'next/link';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const About = () => (
  <div className="p-10">
    <Head>
      <title>About | Zachary Collazo</title>
    </Head>
    <NextSeo title="About" openGraph={{ title: 'About | Zachary Collazo' }} />
    <main className="flex flex-col min-h-[77vh] pb-0 md:pb-0 mb-16 bottom-0 top-0 flex-wrap flex-1 p-2 md:p-5 font-sans">
      <h1 className="text-5xl font-extrabold p-2 md:p-4 md:text-8xl">Hey there!</h1>
      <h1 className="text-3xl p-2 md:p-4 md:text-7xl font-extralight">
        My name is Zachary Collazo.
      </h1>
      <div className="text-xl font-mono p-2 md:p-4 md:text-3xl">
        I&#39;m a teenager from Chesterfield, VA. I like making cool websites
        and apps and whatever else you want me to make.
        I strive to learn everything I can get my hands on.
        I&#39;ve always had an inclination to math and science, which has led me
        to an interest in technology.
        <br />
        <br />
        I have about two years of experience with hardware and software development, but
        I tend to work on the software more. Most of my knowledge comes from&nbsp;
        <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" href="https://github.com/ericcecchi">my uncle</a>
        , who is a full-stack developer for&nbsp;
        <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.arcadia.com/">Arcadia</a>
        .
      </div>
      <div className="text-lg p-2 md:p-4 font-extralight md:text-2xl">
        Feel free to check out some of my&nbsp;
        <Link passHref href="/projects">
          <a style={{ transitionDuration: '.5s' }} className="font-bold underline inline-block hover:translate-x-[1px] transition-transform">projects</a>
        </Link>
        .
      </div>
    </main>
  </div>
);

export default About;
