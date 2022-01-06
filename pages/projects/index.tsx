import Head from 'next/head';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { NextSeo } from 'next-seo';
import Project from '@/components/Project';
import { getAllProjects } from '@/utils/github';

const Projects = ({ projects }) => {
  const md = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <Head>
        <title>Projects | Zachary Collazo</title>
      </Head>
      <NextSeo title="Projects" openGraph={{ title: 'Projects | Zachary Collazo' }} />
      <main className="flex flex-col min-h-[77vh] bottom-0 top-0 flex-wrap flex-1 p-16 font-mono">
        <h1 className="font-bold md:text-8xl mb-8 text-5xl">Projects</h1>
        <ul className="flex flex-row gap-4 max-w-full children-centered flex-wrap">
          {
            projects.map((p) => <Project key={p.name} project={p} />)
          }
          <li style={{ transitionDuration: '.3s' }} className="transition-transform p-4 text-center md:w-[396px] md:flex-grow flex flex-col justify-center hover:translate-x-[1px]"><Link href="/resume" passHref><a className="font-bold text-lg">View other content on my resume.</a></Link></li>
          {md && new Array((projects.length + 1) % 3).fill(0).map((_, i) => <li key={i.toString()} aria-hidden="true" className="min-w-[396px] flex-grow" />)}
        </ul>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const projects = (await getAllProjects()).filter((p) => p.name !== 'ztcollazo');

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

export default Projects;
