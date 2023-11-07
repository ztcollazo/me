import { FC } from 'react';

const Topic: FC<{ topic: { name: string, url: string } }> = ({ topic }) => 
  <span
    title={topic.name}
    className="truncate bg-blue-400 rounded-full text-white px-3 py-1 m-1 text-md sm:text-sm"
  >{topic.name}</span>;

export default Topic;
