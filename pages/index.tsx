import { CSSProperties, useState } from 'react';
import Head from 'next/head';
import { RoughNotation } from 'react-rough-notation';
import { useTheme } from 'next-themes';
import {
  Fade, Zoom, LightSpeed,
} from 'react-reveal';
import RubberBand from 'react-reveal/RubberBand';
import { Link as ScrollLink, Element } from 'react-scroll';
import { HiOutlineChevronDown } from '@react-icons/all-files/hi/HiOutlineChevronDown';
import Link from 'next/link';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';
import { RiGithubLine } from '@react-icons/all-files/ri/RiGithubLine';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';
import Project from '@/components/Project';
import { randomColor } from '@/utils/random';
import { getAllProjects } from '@/utils/github';

const Home = ({ projects }) => {
  // First animation done, second animation done, etc.
  const [fad, setFad] = useState(false);
  const [sad, setSad] = useState(false);
  const [shouldJump, setShouldJump] = useState(false);

  const { theme } = useTheme();
  const dark = theme === 'dark';

  const md = useMediaQuery({ minWidth: 768 });

  return (
    <ParallaxProvider>
      <div className="scroll-snap-y scroll-snap-start">
        <Head>
          <title>Home | Zachary Collazo</title>
        </Head>
        <div id="parallax" className="flex py-10 ml-4 md:ml-0 md:p-0 md:mr-8 -mt-48 mb-48 flex-row">
          <Parallax className="w-full" y={[-60, 60]}>
            <main style={{ zIndex: -1 }} className="w-full text-center flex flex-col justify-center m-auto md:min-h-screen min-h-[60vh] pt-16">
              <div id="jumbotron" className="flex text-center relative md:p-20 md:pr-20 pr-16 p-10 items-stretch justify-between w-full flex-col m-auto font-mono">
                <Fade
                  bottom
                  onReveal={() => {
                    setInterval(() => setShouldJump(true), 450);
                    setFad(true);
                  }}
                >
                  <RubberBand spy={shouldJump} onReveal={() => setSad(true)}>
                    <h1 className="md:text-[15rem] font-semibold text-7xl sm:text-9xl py-4">Hello</h1>
                  </RubberBand>
                </Fade>
                <Zoom bottom when={fad}>
                  <h2 className="md:text-6xl font-extralight text-2xl sm:text-4xl p-2 md:p-4">my name is</h2>
                </Zoom>
                <LightSpeed left delay={1200} spy={sad}>
                  <RoughNotation animationDelay={975 + 500} iterations={2} animate show={sad} animationDuration={1100} strokeWidth={7} color={randomColor(dark)} type="box">
                    <h1 className="md:text-9xl sm:text-6xl text-5xl font-extralight">Zachary Collazo</h1>
                  </RoughNotation>
                </LightSpeed>
              </div>
              <div className="relative bottom-4 left-1/2 -ml-4 right-1/2 w-5 h-5">
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
            <div className="flex justify-around flex-1 flex-wrap-reverse md:flex-nowrap">
              <Fade collapse opposite top delay={600}>
                <p
                  className="truncate overflow-hidden mt-2 md:text-left font-mono md:w-3/4 text-lg"
                  style={{
                    WebkitLineClamp: md ? 2 : 4, lineClamp: md ? 2 : 4, whiteSpace: 'pre-wrap', display: '-webkit-box', WebkitBoxOrient: 'vertical', MozBoxOrient: 'vertical',
                  }}
                >
                  Hey there! I&#39;m a teenager from Chesterfield, VA. I like making cool websites
                  and apps and whatever else you want me to make.
                  I strive to learn everything I can get my hands on (which is a lot).
                  I&#39;ve always had an inclination to math and science, which has led me
                  to an interest in technology.
                </p>
              </Fade>
              <Fade opposite bottom delay={600}>
                <div className="min-h-full flex items-center w-full text-center justify-center md:justify-start md:text-left md:ml-8">
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
            <div className="flex mt-20 justify-around flex-col md:grid" style={{ gridTemplateColumns: '33% 66%' }}>
              <Fade opposite bottom delay={600}>
                <div className="min-h-full flex items-center justify-center md:justify-start md:p-5 md:mt-5">
                  <h2 className="sm:text-4xl text-2xl">Check out my</h2>
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
                <ul style={{ flex: '1 1 300px' }} className="flex gap-4 children-centered flex-wrap">
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
          <Parallax y={[-200, 200]}>
            <div className="text-center relative md:w-1/2 m-auto mb-20 p-4 flex justify-center gap-8 items-center">
              <p className="sm:text-4xl text-2xl">Find me on</p>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ztcollazo" aria-label="Github"><RiGithubLine size={md ? 32 : 24} /></a>
              <a target="_blank" rel="noopener noreferrer" href="mailto:ztcollazo08@gmail.com" aria-label="Github"><HiOutlineMail size={md ? 32 : 24} strokeWidth={2} /></a>
            </div>
          </Parallax>
        </Element>
      </div>
    </ParallaxProvider>
  );
};

export const getServerSideProps = async () => {
  try {
    const projects = (await getAllProjects('ztcollazo', 3)).filter((p) => p.name !== 'ztcollazo');

    return {
      props: {
        projects,
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
