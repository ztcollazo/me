import { CSSProperties, FC, ReactNode } from 'react';

export interface Props {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Card: FC<Props> = ({ children, style, className }) => (
  <div style={style} className={`block p-6 bg-white min-w-full border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${className}`}>
    {children}
  </div>
);

export default Card;
