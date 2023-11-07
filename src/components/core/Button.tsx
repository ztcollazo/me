import { FC, ReactNode, ElementType, CSSProperties } from 'react';

export interface Props {
  [key: string]: unknown;
  type?: ElementType;
  children?: ReactNode | undefined;
  style?: CSSProperties;
  className: string;
}

const Button: FC<Props> = ({ type: Type = 'button', children, className, ...props }) => {
  return <Type {...props} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${className ? className : ''}`}>{children}</Type>;
};

export default Button;
