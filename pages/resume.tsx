import Head from 'next/head';
import {
  CSSProperties,
  useEffect,
  useState,
  useRef,
  MutableRefObject,
} from 'react';
import { TransitionGroup } from 'react-transition-group';
import { Slide } from 'react-reveal';
import { NextSeo } from 'next-seo';
import { HiOutlineDocument } from '@react-icons/all-files/hi/HiOutlineDocument';
import { HiOutlineDocumentDownload } from '@react-icons/all-files/hi/HiOutlineDocumentDownload';
import events from '@/resources/events.json';

const ResumeItem = ({ year, description, lastItem }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const handleScroll = (root: MutableRefObject<any>) => {
    const r = root.current as HTMLElement;
    const rect = r.getBoundingClientRect();

    if (rect.bottom < ((window.innerHeight / 5) * 4)) {
      if (!inView) setInView(true);
    } else if (inView && !lastItem) {
      setInView(false);
    } else if (lastItem && rect.bottom < window.innerHeight) {
      if (!inView) setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    handleScroll(ref);
    window.addEventListener('scroll', () => handleScroll(ref));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div ref={ref} style={{ '--c-width': '8rem' } as CSSProperties} className="circle items-center flex flex-col justify-center mx-5 w-36 h-36 p-[2px] dark:bg-gray-600 bg-gray-300">
          <div style={{ '--c-width': '7.75rem' } as CSSProperties} className="circle items-center flex flex-col justify-center p-[2px] w-[8.5rem] h-[8.5rem] dark:bg-gray-900 bg-white">
            <div style={{ '--c-width': '7.5rem' } as CSSProperties} className="circle items-center flex flex-col justify-center p-[2px] w-[8rem] h-[8rem] dark:bg-gray-600 bg-gray-300">
              <div style={{ '--c-width': '7.25rem' } as CSSProperties} className={`circle p-2 items-center flex flex-col justify-center w-[7.5rem] h-[7.5rem] ${inView ? 'dark:bg-gray-600 bg-gray-300' : 'dark:bg-gray-900 bg-white'}`}>
                {year}
              </div>
            </div>
          </div>
        </div>
        {!lastItem && <div className="h-[50px] border-2 dark:border-gray-600 border-gray-300 w-7 -my-1" />}
      </div>
      <Slide left in={inView}>
        <div className="flex flex-col self-center p-4 rounded-lg border-2 border-gray-300 h-[min-content] justify-center -mt-10">{description}</div>
      </Slide>
    </>
  );
};

const Resume = () => (
  <>
    <Head>
      <title>Resume | Zachary Collazo</title>
    </Head>
    <NextSeo title="Resume" openGraph={{ title: 'Resume | Zachary Collazo' }} />
    <main className="flex flex-col min-h-[77vh] bottom-0 top-0 flex-wrap flex-1 p-16 font-mono">
      <div className="flex items-center">
        <h1 className="font-bold md:text-8xl mb-8 text-5xl">Resume</h1>
        <a title="View PDF Resume" href="/resume.pdf" className="ml-5 mb-5" aria-label="View PDF version">
          <HiOutlineDocument size={48} />
        </a>
        <a title="Download PDF Resume" href="/resume.pdf" download className="ml-5 mb-5" aria-label="View PDF version">
          <HiOutlineDocumentDownload size={48} />
        </a>
      </div>
      <div className="items-start justify-around flex flex-wrap">
        <div style={{ flex: '1 1 45vw' }} className="mb-8 text-md">
          <h2 className="font-bold md:text-4xl mb-8 text-2xl">Academics</h2>
          <ul className="list-inside list-[circle]">
            <li>
              <b>Richmond Christian School,</b>
              <i>&nbsp;(K-4th)</i>
            </li>
            <li>
              <b>Winterpock Elementary School,</b>
              <i>&nbsp;Center-Based Gifted (5th)</i>
            </li>
            <li>
              <b>Manchester Middle School,</b>
              <i>&nbsp;Center-Based Gifted(6th)</i>
            </li>
            <li>
              <b>Homeschool,</b>
              <i>&nbsp;(7th-present)</i>
            </li>
          </ul>
        </div>
        <div style={{ flex: '1 1 45vw' }} className="mb-8 text-md">
          <h2 className="font-bold md:text-4xl mb-8 text-2xl">Skills</h2>
          <ul className="list-inside list-[circle]">
            <li>
              <b>HTML/CSS,</b>
              <i>&nbsp;FreeCodeCamp Certified</i>
            </li>
            <li>
              <b>JavaScript,</b>
              <i>&nbsp;SoloLearn Certified</i>
            </li>
            <li>
              <b>ReactJS,</b>
              <i>&nbsp;Completing Certification</i>
            </li>
            <li>
              <b>Other languages,</b>
              <i>&nbsp;TypeScript, Ruby (and Ruby on Rails), Golang, Python, Bash, Zsh</i>
            </li>
            <li>
              <b>3D Design/3D Printing</b>
            </li>
            <li>
              <b>Raspberry Pi &amp; Linux</b>
            </li>
            <li>
              <b>ProPresenter 6 &amp; 7</b>
            </li>
          </ul>
        </div>
        <div style={{ flex: '1 1 45vw' }}>
          <a href="/resume.pdf"><b>View other categories on the PDF version.</b></a>
        </div>
      </div>
      <div>
        <h2 className="font-bold md:text-4xl mb-8 text-2xl">Timeline</h2>
        <TransitionGroup>
          <div className="grid" style={{ gridTemplateColumns: '15% 85%' }}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {events.map((event, i) => <ResumeItem lastItem={i === events.length - 1} key={`${event.year} - ${event.description}`} {...event} />)}
          </div>
        </TransitionGroup>
      </div>
    </main>
  </>
);

export default Resume;
