import { FC } from 'react';

const Topic: FC<{ topic: { name: string, url: string } }> = ({ topic }) => <span className="bg-[#316DCA30] dark:bg-[#3e51ff30] text-[#316DCA] dark:text-[#5183f0] p-[6px] px-[14px] m-1 rounded-full">{topic.name}</span>;

export default Topic;
