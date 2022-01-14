import { CSSProperties, useState } from 'react';
import Head from 'next/head';
import { RoughNotation } from 'react-rough-notation';
import { useTheme } from 'next-themes';
import {
  Fade, Slide,
} from 'react-reveal';
import { Link as ScrollLink, Element } from 'react-scroll';
import { HiOutlineChevronDown } from '@react-icons/all-files/hi/HiOutlineChevronDown';
import Link from 'next/link';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';
import { RiGithubLine } from '@react-icons/all-files/ri/RiGithubLine';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';
import { NextSeo } from 'next-seo';
import Project from '@/components/Project';
import { randomColor } from '@/utils/random';
import { getProject } from '@/utils/github';

const Home = ({ projects }) => {
  // First animation done, second animation done, etc.
  const [fad, setFad] = useState(false);
  const [sad, setSad] = useState(false);

  const { theme } = useTheme();
  const dark = theme === 'dark';

  const md = useMediaQuery({ minWidth: 768 });

  return (
    <ParallaxProvider>
      <div className="scroll-snap-y scroll-snap-start">
        <Head>
          <title>Home | Zachary Collazo</title>
        </Head>
        <NextSeo title="Home" />
        <div id="parallax" className="flex py-10 ml-4 md:ml-0 md:p-0 md:mr-8 -mt-20 mb-28 flex-row">
          <Parallax className="w-full max-w-full" y={[-30, 30]}>
            <main style={{ zIndex: -1 }} className="w-full flex flex-col -mt-10 justify-center h-full items-center md:items-start m-auto md:mb-36 lg:mb-0 pt-16">
              <div style={{ flex: '1 1 45%' }} id="jumbotron" className="flex font-sans md:p-20 md:mr-0 p-10 justify-center w-max max-w-full gap-4">
                <div className="flex flex-col items-center md:items-start max-w-full">
                  <Slide left onReveal={() => setTimeout(() => setFad(true), 600)}>
                    <h1 className="sm:text-8xl md:text-[10rem] lg:text-[13rem] font-extrabold text-6xl p-2">Hello</h1>
                  </Slide>
                  <Slide when={fad} left onReveal={() => setTimeout(() => setSad(true), 1000)}>
                    <h2 className="sm:text-4xl md:text-5xl lg:text-7xl font-thin text-2xl p-2">my name is</h2>
                  </Slide>
                  <Slide left when={sad}>
                    <RoughNotation animationDelay={975 + 500} iterations={2} animate show={sad} animationDuration={1100} strokeWidth={7} color={randomColor(dark)} type="box">
                      <h1 className="sm:text-7xl md:text-8xl lg:text-[9rem] text-5xl p-2 font-extralight">Zachary Collazo</h1>
                    </RoughNotation>
                  </Slide>
                </div>
              </div>
              <div className="relative self-center bottom-4 md:bottom-10 w-5 h-5">
                <ScrollLink smooth duration={500} to="rest">
                  <HiOutlineChevronDown color="currentColor" />
                </ScrollLink>
              </div>
            </main>
          </Parallax>
        </div>
        <div className="dark:bg-gray-600 h-[20vh] relative left-0 right-0 -top-32 slide-top-clip-path bg-gray-300 w-full" />
        <Element name="rest">
          <div className="-mt-56 mb-20 min-h-[50vh] z-50 text-center relative dark:bg-gray-600 md:p-20 sm:p-10 p-5 bg-gray-300 flex flex-col">
            <div className="flex justify-around w-full flex-wrap-reverse xl:flex-nowrap">
              <Fade collapse opposite top delay={600}>
                <p
                  className="truncate overflow-hidden mt-2 xl:text-left m-auto font-mono md:w-3/4 text-lg"
                  style={{
                    WebkitLineClamp: md ? 2 : 4, lineClamp: md ? 2 : 4, whiteSpace: 'pre-wrap', display: '-webkit-box', WebkitBoxOrient: 'vertical', MozBoxOrient: 'vertical',
                  }}
                >
                  Hey there! I&#39;m a teenager from Chesterfield, VA. I like making cool websites
                  and apps and whatever else you want me to make.
                  I strive to learn everything I can get my hands on.
                  I&#39;ve always had an inclination to math and science, which has led me
                  to an interest in technology.
                </p>
              </Fade>
              <Fade opposite bottom delay={600}>
                <div className="min-h-full flex items-center w-full justify-center xl:justify-start xl:text-left xl:ml-8">
                  <h2 className="sm:text-4xl text-2xl">Learn more</h2>
                  <Link href="/about" passHref>
                    <a>
                      <h1
                        style={{ transitionDuration: '1s', '--hh-color': randomColor(dark), '--hh-opacity': '100%' } as CSSProperties}
                        onMouseEnter={(event) => event.currentTarget.style.setProperty('hh-opacity', '60%')}
                        onMouseLeave={(event) => event.currentTarget.style.setProperty('hh-opacity', '100%')}
                        className="sm:text-4xl text-2xl hover-highlight relative font-bold ml-4"
                      >
                        About me
                      </h1>
                    </a>
                  </Link>
                </div>
              </Fade>
            </div>
            <div className="flex flex-col mt-20 xl:grid xl:grid-cols-2 justify-start" style={{ gridTemplateColumns: '40% 60%' }}>
              <Fade opposite bottom delay={600}>
                <div className="min-h-full w-full flex items-center justify-center xl:justify-start md:p-5 md:mt-5">
                  <h2 className="sm:text-4xl text-2xl">Check out all of my</h2>
                  <Link href="/projects" passHref>
                    <a>
                      <h1
                        style={{ transitionDuration: '1s', '--hh-color': randomColor(dark), '--hh-opacity': '100%' } as CSSProperties}
                        onMouseEnter={(event) => event.currentTarget.style.setProperty('hh-opacity', '60%')}
                        onMouseLeave={(event) => event.currentTarget.style.setProperty('hh-opacity', '100%')}
                        className="sm:text-4xl text-2xl hover-highlight font-bold relative ml-4"
                      >
                        Projects
                      </h1>
                    </a>
                  </Link>
                </div>
              </Fade>
              <Fade opposite top delay={600}>
                <ul className="flex gap-4 children-centered flex-wrap lg:flex-nowrap">
                  {
                    projects.map((p) => <Project key={p.name} project={p} />)
                  }
                </ul>
              </Fade>
            </div>
          </div>
        </Element>
        <div className="dark:bg-gray-600 h-[20vh] relative left-0 right-0 -top-24 md:-top-32 md:-mt-1 slide-bottom-clip-path bg-gray-300 w-full" />
        <Element name="social" className="mt-24">
          <Parallax y={[-100, 100]}>
            <div className="text-center relative md:w-1/2 m-auto mb-20 p-4 flex justify-center gap-8 items-center">
              <p className="sm:text-4xl text-2xl">Find me on</p>
              <a className="rounded-full border-[1px] border-transparent hover:border-current p-2" target="_blank" rel="noopener noreferrer" href="https://github.com/ztcollazo" aria-label="Github"><RiGithubLine size={md ? 32 : 24} /></a>
              <a className="rounded-full border-[1px] border-transparent hover:border-current p-2" target="_blank" rel="noopener noreferrer" href="mailto:ztcollazo08@gmail.com" aria-label="Github"><HiOutlineMail size={md ? 32 : 24} strokeWidth={2} /></a>
            </div>
          </Parallax>
        </Element>
      </div>
    </ParallaxProvider>
  );
};

export const getServerSideProps = async () => {
  try {
    const project1 = await getProject('bookwyrm');
    const project2 = await getProject('farm-chores');

    return {
      props: {
        projects: [project1, project2],
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        projects: null,
        error: error.toString(),
      },
    };
  }
};

export default Home;
