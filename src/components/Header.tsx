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
}) => <NavLink onClick={onClick} activeClassName="active" className={`h-full py-8 font-bold px-6 mx-3 text-xl m-1 text-center animated ${className}`} href={href}>{children}</NavLink>;

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
    <header className="flex flex-col gap-4 items-center bg-white min-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
      <div className="flex justify-between items-center px-5 py-2 w-full right-0 dark:text-white text-black">
        <a href="/" aria-label="home" className="flex flex-col justify-center items-center md:items-start">
          <img src={`/me-${theme}.png`} alt="" className="z-[500]" width={40} height={40} />
        </a>
        <nav className="hidden md:flex gap-4 items-center justify-end m-0 px-5 py-2">
          <PageLink href="/">Home</PageLink>
          <PageLink href="/about">About</PageLink>
          <PageLink href="/projects">Projects</PageLink>
          <Button type={NavLink} className="max-w-full ml-4 block text-center" activeClassName="bg-blue-400" href="/resume">Resume</Button>
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
          maxHeight: h,
        }}
        className="md:hidden flex flex-col gap-2 m-0 -mt-4 items-start overflow-hidden w-full"
      >
        <PageLink onClick={toggle} className="mx-4 block w-max" href="/">Home</PageLink>
        <PageLink onClick={toggle} className="mx-4 block w-max" href="/about">About</PageLink>
        <PageLink onClick={toggle} className="mx-4 block w-max" href="/projects">Projects</PageLink>
        <Button type={NavLink} className="max-w-full m-4 block text-center" activeClassName="bg-blue-400" href="/resume">Resume</Button>
      </nav>
    </header>
  );
});

export default Header;
