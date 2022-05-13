import { CSSProperties, FC } from 'react';
import colors from 'tailwindcss/colors';

const Topic: FC<{ topic: { name: string, url: string } }> = ({ topic }) => 
  <span
    style={{ '--clay-shadow-outset': '4px 4px 16px 0 rgba(0, 0, 0, 0.25)', '--clay-background': colors.blue[400] } as CSSProperties}
    title={topic.name}
    className="clay truncate text-white md:py-[6px] md:px-[14px] px-3 py-1 m-1 text-md sm:text-sm"
  >{topic.name}</span>;

export default Topic;
