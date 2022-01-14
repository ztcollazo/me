import Head from 'next/head';
import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  ReactNode,
} from 'react';
import { TransitionGroup } from 'react-transition-group';
import { Slide } from 'react-reveal';
import { NextSeo } from 'next-seo';
import { HiOutlineDocument } from '@react-icons/all-files/hi/HiOutlineDocument';
import { HiOutlineDocumentDownload } from '@react-icons/all-files/hi/HiOutlineDocumentDownload';
import events from '@/resources/events.json';

// eslint-disable-next-line react/display-name
const Circle = forwardRef<HTMLDivElement, {
  width: number,
  height: number,
  inView: boolean,
  differentPad: boolean,
  children: ReactNode,
}>(({
  width,
  height,
  children,
  differentPad = false,
  inView,
}, ref) => (
  <div ref={ref} style={{ minWidth: `${width}rem`, minHeight: `${height}rem` }} className="rounded-full ring-2 ring-offset-1 ring-offset-transparent dark:ring-gray-600 ring-gray-300 items-center flex flex-col justify-center mx-5 p-2 md:p-4">
    <div style={{ minWidth: `${width - 1}rem`, minHeight: `${height - 1}rem` }} className={`rounded-full ring-2 ring-offset-1 ring-offset-transparent dark:ring-gray-600 ring-gray-300 items-center flex flex-col justify-center p-2 ${differentPad && 'py-4'} md:p-4 ${differentPad && 'md:py-6'} ${inView ? 'bg-gray-300 dark:bg-gray-600' : ''}`}>
      {children}
    </div>
  </div>
));

const ResumeItem = ({
  year = null,
  description = '',
  lastItem = false,
  circleHeight = 5,
  circleWidth = 5,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    const r = ref.current as HTMLElement;
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
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <Circle
          ref={ref}
          width={circleWidth}
          differentPad={!description}
          height={circleHeight}
          inView={inView}
        >
          {year}
        </Circle>
        {!lastItem && <div className="md:h-[50px] h-[100px] border-2 dark:border-gray-600 border-gray-300 w-3 md:w-7" />}
      </div>
      { description ? (
        <Slide left when={inView}>
          <div className={`flex flex-col self-center p-1 md:p-4 rounded-lg border-2 border-gray-300 h-[min-content] justify-center ${!lastItem ? '-mt-20 md:-mt-10' : '-mt-6'}`}>{description}</div>
        </Slide>
      ) : <div />}
    </>
  );
};

const Resume = () => {
  const [eventsByYears, setEventsByYears] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const localEvents: typeof eventsByYears = {};
    events.forEach((ev) => {
      localEvents[ev.year.toString()] = [
        ...(localEvents[ev.year.toString()] ?? []),
        ev.description,
      ];
    });
    setEventsByYears(localEvents);
  }, []);

  return (
    <>
      <Head>
        <title>Resume | Zachary Collazo</title>
      </Head>
      <NextSeo title="Resume" openGraph={{ title: 'Resume | Zachary Collazo' }} />
      <main className="flex flex-col min-h-[77vh] bottom-0 top-0 flex-wrap flex-1 lg:p-16 font-mono max-w-full">
        <div className="flex justify-center md:justify-start items-center p-2">
          <h1 className="font-extrabold md:text-8xl mb-8 text-5xl font-sans">Resume</h1>
          <a target="_blank" rel="noopener noreferrer" title="View PDF Resume" href="/resume.pdf" className="ml-5 mb-5 rounded-full border-[1px] border-transparent hover:border-current p-2" aria-label="View PDF version">
            <HiOutlineDocument size={48} />
          </a>
          <a title="Download PDF Resume" href="/resume.pdf" download className="ml-5 mb-5 rounded-full border-[1px] border-transparent hover:border-current p-2" aria-label="View PDF version">
            <HiOutlineDocumentDownload size={48} />
          </a>
        </div>
        <div className="items-center md:items-start md:p-3 justify-around flex flex-col md:grid md:grid-cols-2">
          <div className="mb-8 text-md">
            <h2 className="font-extralight md:text-4xl mb-8 text-2xl font-sans">Academics</h2>
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
          <div className="mb-8 text-md">
            <h2 className="font-extralight md:text-4xl mb-8 text-2xl font-sans">Skills</h2>
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
          <div>
            <a href="/resume.pdf"><b>View other categories on the PDF version.</b></a>
          </div>
        </div>
        <div className="mt-10 mb-20 px-2">
          <h2 className="font-extralight md:text-4xl w-full mb-8 text-2xl font-sans">Timeline</h2>
          <TransitionGroup>
            <div className="grid" style={{ gridTemplateColumns: 'minmax(0, 0.25fr) minmax(0, 1fr)' }}>
              {Object.keys(eventsByYears).reverse().map((year, i) => (
                <>
                  <ResumeItem key={year} year={parseInt(year, 10)} />
                  {
                    eventsByYears[year].map((des, j) => (
                      <ResumeItem
                        circleHeight={0}
                        circleWidth={0}
                        description={des}
                        key={des}
                        lastItem={
                          i === (Object.keys(eventsByYears).length - 1)
                          && j === (eventsByYears[year].length - 1)
                        }
                      />
                    ))
                  }
                </>
              ))}
            </div>
          </TransitionGroup>
        </div>
      </main>
    </>
  );
};

export default Resume;
