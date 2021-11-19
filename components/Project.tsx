import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { HiOutlineExternalLink } from '@react-icons/all-files/hi/HiOutlineExternalLink';
import Topic from './Topic';
import nameFor from '../utils/name-for';

const Project: FC<{ project: any }> = ({ project }) => (
  <li style={{ transitionDuration: '.5s' }} className="rounded-xl max-w-[396px] opacity-75 flex flex-col justify-between p-5 m-5 dark:bg-gray-800 bg-gray-300 shadow-xl border-[1px] border-gray-600 dark:border-white hover:translate-x-[1px] hover:translate-y-[-1px] transition-transform">
    <div className="flex flex-row justify-between">
      <div>
        <Link passHref href={`/projects/${project.name}`}><a><h2 className="inline-block">{nameFor(project.name)}</h2></a></Link>
        <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
      </div>
      <span className="flex flex-col">
        {project.homepageUrl && <a target="_blank" rel="noopener noreferrer" aria-label="Open page" className="inline-block m-2" href={project.homepageUrl}><HiOutlineExternalLink /></a>}
        <a target="_blank" rel="noopener noreferrer" aria-label="Open github repository" className="inline-block m-2" href={project.html_url}><FaGithub /></a>
      </span>
    </div>
    <div className="flex flex-row flex-wrap justify-start">
      {
          project.topics.map((t) => <Topic key={t.name} topic={t} />)
        }
    </div>
    {
        project.owner.login !== 'ztcollazo' ? (
          <div className="flex flex-row justify-start items-center">
            <Image src={project.owner.avatarUrl} className="rounded-full m-2" width={20} height={20} alt={`${project.owner.login}'s avatar'`} />
            <a target="_blank" rel="noopener noreferrer" className="m-2" href={project.owner.html_url}>{project.owner.login}</a>
          </div>
        )
          : null
      }
  </li>
);

export default Project;
