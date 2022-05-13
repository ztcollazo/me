import { FC, AnchorHTMLAttributes, useState, useEffect } from 'react';

type NavLinkProps = {
  activeClassName?: string,
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const NavLink: FC<NavLinkProps> = ({
  href, activeClassName, className, children, ...rest
}) => {
  const [path, setPath] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
    }
  });

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <a href={href} {...rest} className={`${path === href ? `${activeClassName} ` : ''}${className}`}>{children}</a>;
};

NavLink.defaultProps = {
  activeClassName: '',
};

export default NavLink;
