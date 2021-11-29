import { useState } from 'react';
import Head from 'next/head';
import { RoughNotation } from 'react-rough-notation';
import { useTheme } from 'next-themes';
import {
  Fade, Zoom, LightSpeed, Rotate,
} from 'react-reveal';
import RubberBand from 'react-reveal/RubberBand';
import { Link as ScrollLink, Element } from 'react-scroll';
import { HiOutlineChevronDown } from '@react-icons/all-files/hi/HiOutlineChevronDown';
import Link from 'next/link';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { randomColor } from '@/utils/random';

const Home = () => {
  // Main animation done, first animation done, etc.
  const [mad, setMad] = useState(false);
  const [had, setHad] = useState(false);
  const [fad, setFad] = useState(false);
  const [sad, setSad] = useState(false);
  const [shouldJump, setShouldJump] = useState(false);

  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <ParallaxProvider>
      <div>
        <Head>
          <title>Home | Zachary Collazo</title>
        </Head>
        <div id="parallax" className="flex flex-row">
          <Parallax className="w-full" y={[-20, 30]}>
            <main style={{ zIndex: -1 }} className="w-full -mt-8 text-center flex flex-row justify-center min-h-screen pt-16">
              <div id="jumbotron" className="flex text-center relative p-20 scale-95 items-stretch -mt-4 justify-between w-full flex-col m-auto pt-0 font-mono">
                <Fade
                  bottom
                  onReveal={() => {
                    setInterval(() => setShouldJump(true), 350);
                    setMad(true);
                  }}
                >
                  <RubberBand spy={shouldJump} onReveal={() => setHad(true)}>
                    <h1 className="md:text-[15rem] font-semibold text-7xl sm:text-9xl py-4">Hello</h1>
                  </RubberBand>
                </Fade>
                <Zoom bottom when={mad}>
                  <h2 className="md:text-6xl font-extralight text-2xl sm:text-4xl p-2 md:p-4">my name is</h2>
                </Zoom>
                <LightSpeed left delay={1000} spy={had}>
                  <RoughNotation animationDelay={975 + 500} iterations={2} animate show={had} animationDuration={1100} strokeWidth={7} color={randomColor(dark)} type="box">
                    <h1 className="md:text-9xl sm:text-6xl text-5xl font-extralight">Zachary Collazo</h1>
                  </RoughNotation>
                </LightSpeed>
              </div>
              <div className="absolute bottom-[10rem] left-1/2 right-1/2 w-5 h-5">
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
            <Rotate opposite topLeft wait={600} onReveal={() => setFad(true)}>
              <div className="min-h-full flex flex-col justify-start items-stretch p-5">
                <h2 className="text-4xl text-left md:text-7xl">Learn more</h2>
                <Link href="/about" passHref>
                  <a className="mt-5">
                    <h1 style={{ transitionDuration: '1s' }} className="text-6xl relative font-bold text-left md:text-9xl hover:translate-x-1 transition-transform">
                      &nbsp;&nbsp;
                      <RoughNotation type="highlight" animationDelay={400} color={randomColor(dark)} animate show={fad}>About me</RoughNotation>
                    </h1>
                  </a>
                </Link>
              </div>
            </Rotate>
            <Rotate opposite bottomRight wait={600} onReveal={() => setSad(true)}>
              <div className="min-h-full min-w-full flex flex-col justify-end items-stretch p-20">
                <h2 className="text-4xl text-right md:text-7xl">Check out my</h2>
                <Link href="/projects" passHref>
                  <a className="mt-5">
                    <h1 style={{ transitionDuration: '1s' }} className="text-6xl font-bold text-right relative md:text-9xl transition-transform hover:-translate-x-1">
                      &nbsp;&nbsp;
                      <RoughNotation type="highlight" color={randomColor(dark)} animationDelay={400} animate show={sad}>Projects</RoughNotation>
                    </h1>
                  </a>
                </Link>
              </div>
            </Rotate>
          </div>
        </Element>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
