import { FC } from 'react';

const Topic: FC<{ topic: { name: string, url: string } }> = ({ topic }) => <a target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-opacity-75 text-white dark:text-black p-1 px-3 m-1 rounded-full" href={topic.url}>{topic.name}</a>;

export default Topic;
