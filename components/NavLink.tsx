import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

const NavLink = ({href, activeClassName, className, children,  ...rest}: React.PropsWithChildren<LinkProps & { activeClassName?: string, className?: string }>) => {
    const router = useRouter();
    return <Link href={href} passHref ><a className={`${className}${router.pathname === href ? ` ${activeClassName}` : ""}`} >{children}</a></Link>
}

export default NavLink;
