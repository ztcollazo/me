import {
  FC, useState, useEffect, useRef, useCallback,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Switch from 'react-switch';
import { HiSun } from '@react-icons/all-files/hi/HiSun';
import { HiMoon } from '@react-icons/all-files/hi/HiMoon';
import { Squash } from 'hamburger-react';
import colors from 'tailwindcss/colors';
import Headroom from 'react-headroom';
import NavLink from './NavLink';

// Used for the navbar
const PageLink: FC<{ href: string, className?: string, onClick?: () => void }> = ({
  href, children, className, onClick,
}) => <NavLink onClick={onClick} activeClassName="active-underline dark:text-gray-400 text-gray-500" className={`h-full p-5 m-1 text-center animated-underline ${className}`} passHref href={href}>{children}</NavLink>;

PageLink.defaultProps = {
  className: '',
  onClick: () => null,
};

// The toggle component for dark mode
const ThemeSwtich = () => {
  const { theme, setTheme } = useTheme();

  const dark = theme === 'dark';

  const [checked, setChecked] = useState(dark);
  const [mounted, setMounted] = useState(false);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTheme(checked ? 'dark' : 'light');
  }, [checked, setTheme]);

  if (!mounted) return null;

  const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    fontSize: 15,
    color: 'orange',
    paddingRight: 2,
    paddingLeft: theme === 'dark' ? 5 : 0,
  };

  return (
    <Switch
      className="react-switch px-5 float-right pl-3"
      checked={theme === 'dark'}
      onChange={handleChange}
      onColor="#fff"
      offColor="#000"
      checkedIcon={<div style={iconStyle}><HiMoon color="#000" /></div>}
      uncheckedIcon={<div style={iconStyle}><HiSun color="#fff" /></div>}
      id="material-switch"
      handleDiameter={30}
      width={48}
      height={23}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      aria-label="Toggle dark theme."
    />
  );
};

// This is the header itself
const Header = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const [shouldOpen, setShouldOpen] = useState(false); // need this to define intent
  const [open, setOpen] = useState(false); // this defines if the header is fully open
  const [h, setH] = useState('0');

  // helpers to check where the nav is in the viewport
  const [topOfPage, setAtTopOfPage] = useState(true);
  const [pinned, setPinned] = useState(true);
  const [inView, setInView] = useState(true);
  const [prevY, setPrevY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  // toggle the responsive nav
  const toggle = useCallback(() => {
    if (!pinned) return;
    setH(h === '0' || h === '0px' ? '275px' : '0');
    setShouldOpen(!shouldOpen);
    if (open) {
      setTimeout(() => setOpen(!open), 400);
    } else {
      setTimeout(() => setOpen(!open), 100);
    }
  }, [h, open, pinned, shouldOpen]);

  // scroll handler for useEffect hook, nextjs doesn't support window
  const handleScroll = () => {
    setAtTopOfPage(window.scrollY === 0);

    if (window.scrollY < prevY) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }

    if (window.scrollY > parseInt(window.getComputedStyle(ref.current).height, 10)) {
      setInView(false);
    } else {
      setInView(true);
    }
    setPrevY(window.scrollY);
  };

  // scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Headroom disable={(topOfPage || inView) && !scrollingUp} onUnpin={() => setPinned(false)} onPin={() => setPinned(true)} className="w-full left-0 right-0 bg-white dark:bg-gray-900 top-0" wrapperStyle={{ marginBottom: 10 }}>
      <div ref={ref} style={{ borderBottom: inView && !open && `1px solid ${colors.gray[400]}` }} className={`opacity-90${!open && !inView && pinned ? ' shadow-2xl' : ''} top-0 left-0 bg-white dark:bg-gray-900 p-5 pt-4 pb-4 w-full right-0 dark:text-white text-black`}>
        <Link passHref href="/">
          <a className="text-center ml-8 z-[-1] md:ml-auto md:text-left">
            <Image src={`/me-${theme}.png`} alt="{Z}" width={40} height={40} />
          </a>
        </Link>
        <nav className="float-right hidden md:block absolute top-1 m-0 p-5 pb-4 right-0">
          <PageLink href="/">Home</PageLink>
          <PageLink href="/about">About</PageLink>
          <PageLink href="/projects">Projects</PageLink>
          <ThemeSwtich />
        </nav>
        <div style={{ backgroundColor: 'inherit' }} className="float-right bg-opacity-90 md:hidden absolute w-full p-0 top-0 m-0 right-0">
          <button type="button" onClick={toggle} className="float-right relative text-current p-5 pt-3 -t-1">
            <Squash
              color="currentColor"
              toggle={toggle}
              toggled={shouldOpen}
            />
          </button>
          <div style={{ backgroundColor: 'inherit' }} className="mt-0 pt-0">
            <nav
              style={{
                transition: 'max-height 0.5s ease-in-out',
                maxHeight: pinned ? h : '0',
                backgroundColor: 'inherit',
                borderBottom: topOfPage && `1px solid ${colors.gray[400]}`,
              }}
              className={`overflow-hidden ${topOfPage ? '' : 'shadow-2xl'} block opacity-100 mt-16 w-full top-1 right-0 left-0`}
            >
              <PageLink onClick={toggle} className="w-full mx-4 block" href="/">Home</PageLink>
              <PageLink onClick={toggle} className="w-full mx-4 block" href="/about">About</PageLink>
              <PageLink onClick={toggle} className="w-full mx-4 block" href="/projects">Projects</PageLink>
              <span className="w-full flex flex-row justify-around p-5">
                <span>{theme === 'dark' ? 'Disable dark mode' : 'Enable dark mode'}</span>
                <ThemeSwtich />
              </span>
            </nav>
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default Header;
