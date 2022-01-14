import { FC } from 'react';
import Link from 'next/link';

const FooterLink: FC<{ href: string }> = ({ href, children }) => <Link href={href} passHref><a className="hover:underline">{children}</a></Link>;

const Footer = () => (
  <footer className="text-center absolute left-0 right-0 bg-transparent bottom-0 w-100% p-5">
    <strong>
      &copy;2021 Zachary Collazo
    </strong>
    {' '}
&nbsp; &#183; &nbsp;
    <FooterLink href="/">Home</FooterLink>
    {' '}
&nbsp; &#183; &nbsp;
    <FooterLink href="/about">About</FooterLink>
    {' '}
&nbsp; &#183; &nbsp;
    <FooterLink href="/projects">Projects</FooterLink>
    {' '}
&nbsp; &#183; &nbsp;
    <FooterLink href="/resume">Resume</FooterLink>
  </footer>
);

export default Footer;
