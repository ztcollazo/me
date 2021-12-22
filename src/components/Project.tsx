import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { HiOutlineExternalLink } from '@react-icons/all-files/hi/HiOutlineExternalLink';
import Topic from './Topic';
import nameFor from '@/utils/name-for';

const Project: FC<{ project: any }> = ({ project }) => (
  <li style={{ transitionDuration: '.5s' }} className="rounded-xl cursor-pointer w-full md:w-[396px] md:flex-grow flex flex-col card justify-between bg-white dark:bg-gray-700 hover:translate-x-[1px] hover:translate-y-[-1px] transition-transform">
    <div className="flex flex-row justify-between">
      <Link passHref href={`/projects/${project.name}`}>
        <a>
          <div>
            <h2 className="inline-block">{nameFor(project.name)}</h2>
            <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
          </div>
        </a>
      </Link>
      <span className="flex flex-col">
        {project.homepageUrl && <a target="_blank" rel="noopener noreferrer" aria-label="Open page" className="inline-block m-2" href={['http', 'https', '//'].some((s) => project.homepageUrl.startsWith(s)) ? project.homepageUrl : 'https://'.concat(project.homepageUrl)}><HiOutlineExternalLink size={18} /></a>}
        {!project.isPrivate && <a target="_blank" rel="noopener noreferrer" aria-label="Open github repository" className="inline-block m-2" href={project.url}><FaGithub size={18} /></a>}
      </span>
    </div>
    <div className="flex flex-row md:flex-wrap chip-list justify-start">
      {
            project.topics.map((t) => <Topic key={t.name} topic={t} />)
          }
    </div>
    {
        project.owner.login !== 'ztcollazo' ? (
          <div className="flex flex-row justify-start items-center">
            <Image src={project.owner.avatarUrl} className="rounded-full m-2" width={20} height={20} alt={`${project.owner.login}'s avatar'`} />
            <a target="_blank" rel="noopener noreferrer" className="m-2" href={project.owner.url}>{project.owner.login}</a>
          </div>
        )
          : null
      }
  </li>
);

export default Project;
