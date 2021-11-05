import Typist from 'react-typist';
import Link from 'next/link';
import Head from 'next/head';

const About = () => (
  <div className="p-10">
    <Head>
      <title>About | Zachary Collazo</title>
    </Head>
    <main className="flex flex-col min-h-[77vh] bottom-0 top-0 flex-wrap flex-1 p-2 md:p-5 font-mono">
      <Typist
        avgTypingDelay={10}
        stdTypingDelay={5}
        startDelay={10}
        cursor={{ show: false }}
      >
        <h1 className="text-5xl font-semibold p-2 md:p-4 md:text-8xl">Hey there!</h1>
        <h1 className="text-3xl p-2 md:p-4 md:text-7xl">
          My name is Zachary Collazo.
        </h1>
        <div className="text-xl p-2 md:p-4 md:text-3xl">
          I&#39;m a teenager from Chesterfield, VA. I like making cool websites
          and apps and whatever else you want me to make.
          I strive to learn everything I can get my hands on (which is a lot).
          I&#39;ve always had an inclination to math and science, which has led me
          to an interest in technology. Like I said, I love to learn, so
          if you have a suggestion for this website, please open an issue at&nbsp;
          <a style={{ transitionDuration: '.5s' }} href="//github.com/ztcollazo/me" className="font-bold hover:translate-x-[1px] transition-transform inline-block">this project&#39;s github repo.</a>
        </div>
        <div className="text-lg p-2 md:p-4 md:text-2xl">
          You can also check out some of my other
          <Link passHref href="/projects">
            <a style={{ transitionDuration: '.5s' }} className="font-bold inline-block hover:translate-x-[1px] transition-transform">&nbsp;projects.</a>
          </Link>
        </div>
      </Typist>
    </main>
  </div>
);

export default About;
