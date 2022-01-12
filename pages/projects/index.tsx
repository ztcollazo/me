import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Project from '@/components/Project';
import { getAllProjects } from '@/utils/github';

const Projects = ({ projects }) => (
  <>
    <Head>
      <title>Projects | Zachary Collazo</title>
    </Head>
    <NextSeo title="Projects" openGraph={{ title: 'Projects | Zachary Collazo' }} />
    <main className="flex flex-col min-h-[77vh] bottom-0 top-0 flex-wrap flex-1 p-16 font-mono">
      <h1 className="font-extrabold md:text-8xl mb-8 text-5xl font-sans">Projects</h1>
      <ul className="flex flex-col max-w-full md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {
            projects.map((p) => <Project key={p.name} project={p} />)
          }
        <li style={{ transitionDuration: '.3s' }} className="transition-transform p-4 text-center md:w-[396px] md:flex-grow flex flex-col justify-center hover:translate-x-[1px]">
          <Link href="/resume" passHref>
            <a className="font-bold text-lg">View other content on my resume.</a>
          </Link>
        </li>
      </ul>
    </main>
  </>
);

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
