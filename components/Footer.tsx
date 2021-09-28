import Link from "next/link";
import React from "react";

const FooterLink: React.FC<{href: string}> = ({href, children}) => <Link href={href} passHref><a className="hover:underline">{children}</a></Link>

const Footer = () => {
    return (
        <footer className="absolute left-1/4 right-1/4 text-center bottom-0 p-5">
            <strong>
                &#169;2021 Zachary Collazo
            </strong>  &nbsp; &#183; &nbsp;
            <FooterLink href="/">Home</FooterLink> &nbsp; &#183; &nbsp;
            <FooterLink href="/about">About</FooterLink>
        </footer>
    )
}

export default Footer;