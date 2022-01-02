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
// @ts-ignore
import events from '@/resources/events';

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
        <div className="flex flex-col justify-center -mt-10">{description}</div>
      </Slide>
    </>
  );
};

const Resume = () => (
  <>
    <Head>
      <title>Resume | Zachary Collazo</title>
    </Head>
    <main className="flex flex-col min-h-[77vh] bottom-0 top-0 flex-wrap flex-1 p-16 font-mono">
      <h1 className="font-bold md:text-8xl mb-8 text-5xl">Resume</h1>
      <TransitionGroup>
        <div className="grid" style={{ gridTemplateColumns: '15% 85%' }}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {events.map((event, i) => <ResumeItem lastItem={i === events.length - 1} key={`${event.year} - ${event.description}`} {...event} />)}
        </div>
      </TransitionGroup>
    </main>
  </>
);

export default Resume;
