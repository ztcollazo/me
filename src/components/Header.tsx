import {
  FC, useState, useCallback, memo
} from 'react';
import { Squash } from 'hamburger-react';
import useTheme from '@/utils/use-theme';
import NavLink from './NavLink';
import Button from './core/Button';

// Used for the navbar
const PageLink: FC<{ href: string, className?: string, onClick?: () => void, children?: React.ReactNode | undefined }> = ({
  href, className, onClick, children
}) => <NavLink onClick={onClick} activeClassName="active dark:text-blue-400 text-blue-600" className={`h-full py-3 my-2 px-2 mx-3 m-1 text-center animated ${className}`} href={href}>{children}</NavLink>;

PageLink.defaultProps = {
  className: '',
  onClick: () => null,
};

// This is the header itself
const Header = memo(function Header() {
  const theme = useTheme();
  const [shouldOpen, setShouldOpen] = useState(false); // need this to define intent
  const [open, setOpen] = useState(false); // this defines if the header is fully open
  const [h, setH] = useState('0');

  // toggle the responsive nav
  const toggle = useCallback(() => {
    setH(h === '0' || h === '0px' ? '400px' : '0');
    setShouldOpen(!shouldOpen);
    if (open) {
      setTimeout(() => setOpen(!open), 400);
    } else {
      setTimeout(() => setOpen(!open), 100);
    }
  }, [h, open, shouldOpen]);

  return (
    <header className="flex flex-col gap-4 items-center">
      <div className="flex justify-between items-center clay px-5 py-4 w-full right-0 dark:text-white text-black">
        <a href="/" aria-label="home" className="flex flex-col justify-center items-center md:items-start">
          <img src={`/me-${theme}.png`} alt="" className="z-[500]" width={40} height={40} />
        </a>
        <nav className="float-right hidden md:block m-0 p-5 pb-4">
          <PageLink href="/">Home</PageLink>
          <PageLink href="/about">About</PageLink>
          <PageLink href="/projects">Projects</PageLink>
          <Button type={NavLink} className="ml-4" activeClassName="bg-blue-400" href="/resume">Resume</Button>
        </nav>
        <button type="button" onClick={toggle} className="md:hidden text-current">
          <Squash
            color="currentColor"
            toggle={toggle}
            toggled={shouldOpen}
            label="Toggle nav menu"
          />
        </button>
      </div>
      <nav
        style={{
          transition: 'max-height 0.5s ease-in-out',
          maxHeight: h
        }}
        className="md:hidden clay overflow-hidden w-full"
      >
        <PageLink onClick={toggle} className="max-w-full mx-4 block" href="/">Home</PageLink>
        <PageLink onClick={toggle} className="max-w-full mx-4 block" href="/about">About</PageLink>
        <PageLink onClick={toggle} className="max-w-full mx-4 block" href="/projects">Projects</PageLink>
        <Button type={NavLink} className="max-w-full m-4 block text-center" activeClassName="bg-blue-400" href="/resume">Resume</Button>
      </nav>
    </header>
  );
});

export default Header;
