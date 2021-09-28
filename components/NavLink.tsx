import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

const NavLink = ({href, onClick = null, activeClassName, className, children,  ...rest}: React.PropsWithChildren<LinkProps & { activeClassName?: string, className?: string } & React.AnchorHTMLAttributes<any>>) => {
    const router = useRouter();
    return <Link href={href} passHref {...rest}><a {...rest} className={`${router.pathname === href ? `${activeClassName} ` : ""}${className}`} >{children}</a></Link>
}

export default NavLink;
