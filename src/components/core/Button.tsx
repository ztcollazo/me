import { FC, ReactNode, ElementType, CSSProperties } from 'react';
import colors from 'tailwindcss/colors';

export interface Props {
  [key: string]: unknown;
  type?: ElementType;
  children?: ReactNode | undefined;
  style?: CSSProperties;
  className: string;
}

const Button: FC<Props> = ({ type: Type = 'button', children, style, className, ...props }) => {
  return <Type {...props} style={{ '--clay-shadow-outset': '4px 4px 8px 0 rgba(0, 0, 0, 0.25)', '--clay-background': colors.blue[600], ...style }} className={`clay p-4 hover:bg-blue-500 text-white ${className ? className : ''}`}>{children}</Type>;
};

export default Button;
