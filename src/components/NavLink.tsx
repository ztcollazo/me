import { FC, AnchorHTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type NavLinkProps = LinkProps & {
  activeClassName?: string,
} & AnchorHTMLAttributes<any>;

const NavLink: FC<NavLinkProps> = ({
  href, onClick, activeClassName, className, children, ...rest
}) => {
  const router = useRouter();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Link href={href} passHref {...rest}><a {...rest} className={`${router.pathname === href ? `${activeClassName} ` : ''}${className}`}>{children}</a></Link>;
};

NavLink.defaultProps = {
  activeClassName: '',
};

export default NavLink;
