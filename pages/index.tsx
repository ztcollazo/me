import { useState } from 'react';
import Head from 'next/head';
import { RoughNotation } from 'react-rough-notation';
import { useTheme } from 'next-themes';
import { Fade } from 'react-reveal';
import { Link as ScrollLink, Element } from 'react-scroll';
import { HiOutlineChevronDown } from '@react-icons/all-files/hi/HiOutlineChevronDown';
import Link from 'next/link';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { randomColor } from '../utils/random';

const Home = () => {
  // Main animation done, first animation done, etc.
  const [mad, setMad] = useState(false);
  const [fad, setFad] = useState(false);
  const [sad, setSad] = useState(false);

  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <ParallaxProvider>
      <div>
        <Head>
          <title>Home | Zachary Collazo</title>
        </Head>
        <div id="parallax" className="flex flex-row">
          <Parallax y={[-30, 30]}>
            <main style={{ zIndex: -1 }} className="flex bg-transparent -mt-8 flex-col relative top-0 min-h-screen md:grid m-0 md:grid-cols-1 justify-center pr-36 md:pr-20 md:p-12 pt-0 items-center">
              <div id="jumbotron" className="flex relative md:grid items-stretch mt-4 justify-between w-full flex-col pt-0 md:grid-cols-2 font-mono">
                <Fade bottom onReveal={() => setMad(true)}>
                  <div className="flex w-full md:m-20 md:mt-0 m-16 flex-col items-stretch">
                    <h1 className="md:text-9xl font-semibold text-5xl py-4">Hello</h1>
                    <h2 className="md:text-4xl font-extralight text-lg p-2 md:p-4">my name is</h2>
                    <RoughNotation animationDelay={975} iterations={2} animate show={mad} animationDuration={1100} strokeWidth={7} color={randomColor(dark)} type="underline">
                      <h1 className="md:text-6xl text-3xl font-extralight">Zachary Collazo</h1>
                    </RoughNotation>
                  </div>
                </Fade>
              </div>
              <div className="absolute bottom-36 left-1/2 right-1/2 w-5 h-5">
                <ScrollLink smooth duration={500} to="rest">
                  <HiOutlineChevronDown color="currentColor" />
                </ScrollLink>
              </div>
            </main>
          </Parallax>
        </div>
        <div className="dark:bg-gray-700 h-[20vh] relative left-0 right-0 -top-32 slide-top-clip-path bg-gray-300 w-full" />
        <Element name="rest">
          <div className="-mt-56 min-h-[100vh] relative dark:bg-gray-700 p-20 bg-gray-300 flex flex-col">
            <Fade opposite left wait={600} onReveal={() => setFad(true)}>
              <div className="min-h-full flex flex-col justify-start items-stretch p-5">
                <h2 className="text-2xl text-left md:text-5xl">Learn more</h2>
                <Link href="/about" passHref>
                  <a className="mt-5">
                    <h1 style={{ transitionDuration: '1s' }} className="text-4xl relative font-bold text-left md:text-7xl hover:translate-x-1 transition-transform">
                      &nbsp;&nbsp;
                      <RoughNotation type="highlight" color={randomColor(dark)} animate show={fad}>About me</RoughNotation>
                    </h1>
                  </a>
                </Link>
              </div>
            </Fade>
            <Fade opposite right wait={600} onReveal={() => setSad(true)}>
              <div className="min-h-full min-w-full flex flex-col justify-end items-stretch p-20">
                <h2 className="text-xl text-right md:text-5xl">Check out my</h2>
                <Link href="/projects" passHref>
                  <a className="mt-5">
                    <h1 style={{ transitionDuration: '1s' }} className="text-4xl font-bold text-right relative md:text-7xl transition-transform hover:-translate-x-1">
                      &nbsp;&nbsp;
                      <RoughNotation type="highlight" color={randomColor(dark)} animate show={sad}>Projects</RoughNotation>
                    </h1>
                  </a>
                </Link>
              </div>
            </Fade>
          </div>
        </Element>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
