import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineExternalLink } from '@react-icons/all-files/hi/HiOutlineExternalLink';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import humanizeString from 'humanize-string';
import octokit from '../../utils/github';

const nameFor = (name: string): string => {
  if (name === 'ztcollazo') return 'Profile design';
  if (name === 'me') return 'Portfolio';
  return humanizeString(name);
};

const Projects = ({ projects }) => (
  <>
    <Head>
      <title>Projects | Zachary Collazo</title>
    </Head>
    <main className="flex flex-col min-h-[77vh] bottom-0 top-0 flex-wrap flex-1 p-16 font-mono">
      <h1 className="font-bold md:text-8xl mb-8 text-5xl">Projects</h1>
      <ul className="grid grid-cols-3">
        {
          projects.map((p) => (
            <li style={{ transitionDuration: '.5s' }} key={p.name} className="rounded-xl opacity-75 flex flex-col justify-between p-5 m-5 dark:bg-gray-700 bg-gray-300 shadow-xl border-[1px] border-gray-600 dark:border-white hover:translate-x-[1px] hover:translate-y-[-1px] transition-transform">
              <div className="flex flex-row justify-between">
                <div>
                  <Link passHref href={`/projects/${p.name}`}><a><h2 className="inline-block">{nameFor(p.name)}</h2></a></Link>
                  <p className="text-gray-500 dark:text-gray-400">{p.description}</p>
                </div>
                <span className="flex flex-col">
                  {p.homepage && <a target="_blank" rel="noopener noreferrer" aria-label="Open page" className="inline-block m-2" href={p.homepage}><HiOutlineExternalLink /></a>}
                  <a target="_blank" rel="noopener noreferrer" aria-label="Open github repository" className="inline-block m-2" href={p.html_url}><FaGithub /></a>
                </span>
              </div>
              <div className="flex flex-row flex-wrap justify-start">
                {
                  p.topics.map((t) => <a target="_blank" rel="noopener noreferrer" key={t} className="bg-blue-400 p-1 px-2 m-1 rounded-full" href={`https://github.com/topics/${t}`}>{t}</a>)
                }
              </div>
              {
                p.owner.login !== 'ztcollazo' ? (
                  <div className="flex flex-row justify-start items-center">
                    <Image src={p.owner.avatar_url} className="rounded-full m-2" width={20} height={20} alt={`${p.owner.login}'s avatar'`} />
                    <a target="_blank" rel="noopener noreferrer" className="m-2" href={p.owner.html_url}>{p.owner.login}</a>
                  </div>
                )
                  : null
              }
            </li>
          ))
        }
        <li style={{ transitionDuration: '.3s' }} className="transition-transform m-5 p-4 hover:translate-x-[1px]"><Link href="/resume" passHref><a className="font-bold text-lg">View other content on my resume.</a></Link></li>
      </ul>
    </main>
  </>
);

export const getStaticProps = async () => {
  try {
    const { data } = await octokit.rest.repos.listForUser({
      username: 'ztcollazo',
      type: 'all',
      sort: 'updated',
    });

    return {
      props: {
        projects: data,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error,
      },
    };
  }
};

export default Projects;
