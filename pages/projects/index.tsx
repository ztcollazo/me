import Head from 'next/head';
import Link from 'next/link';
import Project from '../../components/Project';
import { getAllProjects } from '../../utils/github';

const Projects = ({ projects }) => (
  <>
    <Head>
      <title>Projects | Zachary Collazo</title>
    </Head>
    <main className="flex flex-col min-h-[77vh] bottom-0 top-0 flex-wrap flex-1 p-16 font-mono">
      <h1 className="font-bold md:text-8xl mb-8 text-5xl">Projects</h1>
      <ul style={{ flex: '1 1 396px' }} className="flex justify-center flex-row flex-wrap">
        {
          projects.map((p) => <Project key={p.name} project={p} />)
        }
        <li style={{ transitionDuration: '.3s' }} className="transition-transform m-5 p-4 text-center max-w-[396px] flex flex-col justify-center hover:translate-x-[1px]"><Link href="/resume" passHref><a className="font-bold text-lg">View other content on my resume.</a></Link></li>
      </ul>
    </main>
  </>
);

export const getServerSideProps = async () => {
  try {
    const projects = await getAllProjects();

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
