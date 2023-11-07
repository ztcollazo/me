import { FC } from 'react';
import { RiGithubLine } from 'react-icons/ri';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { nameFor } from '@/utils/meta-for';
import Topic from './Topic';
import { Repository } from '@/utils/github';
import Card from './core/Card';

export const Project: FC<{ project: Repository }> = ({ project }) => (
  <Card style={{ transitionDuration: '.5s' }} className="md:flex-grow flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[-1px] transition-transform">
    <div className="flex flex-row justify-between">
      <a href={`/projects/${project.name}`}>
        <div className="font-sans">
          <h2 className="inline-block font-bold">{nameFor(project.name)}</h2>
          <p className="text-gray-500 font-extralight line-clamp-2 dark:text-gray-400">{project.description}</p>
        </div>
      </a>
      <span className="flex flex-col sm:gap-4 gap-2">
        {project.homepageUrl && <a target="_blank" rel="noopener noreferrer" aria-label="Open page" className="inline-block rounded-full border border-transparent hover:border-current p-2" href={['http', 'https', '//'].some((s) => project.homepageUrl.startsWith(s)) ? project.homepageUrl : 'https://'.concat(project.homepageUrl)}><HiOutlineExternalLink size={18} /></a>}
        {!project.isPrivate && <a target="_blank" rel="noopener noreferrer" aria-label="Open github repository" className="inline-block rounded-full border border-transparent hover:border-current p-2" href={project.url}><RiGithubLine size={18} /></a>}
      </span>
    </div>
    {
      project.topics &&
        <div className="flex flex-row mt-2 md:flex-wrap justify-start">
          {
            project.topics.map((t) => <Topic key={t.name} topic={t} />)
          }
        </div>
    }
    {
      project.owner.login !== 'ztcollazo' ? (
        <div className="flex flex-row justify-start items-center">
          <img src={project.owner.avatarUrl} className="rounded-full clay m-2" width={32} height={32} alt={`${project.owner.login}'s avatar'`} />
          <a target="_blank" rel="noopener noreferrer" className="m-2 font-bold" href={project.owner.url}>{project.owner.login}</a>
        </div>
      )
        : null
    }
  </Card>
);

export default Project;
