import { FC } from 'react';

const Topic: FC<{ topic: { name: string, url: string } }> = ({ topic }) => <a target="_blank" rel="noopener noreferrer" className="bg-[#316DCA30] dark:bg-[#3e51ff30] hover:bg-[#316DCA] dark:hover:bg-[#316DCA] hover:opacity-100 hover:text-white dark:hover:text-white text-[#316DCA] dark:text-[#5183f0] p-[6px] px-[14px] m-1 rounded-full" href={topic.url}>{topic.name}</a>;

export default Topic;
