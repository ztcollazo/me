import React from "react";
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes";
import NavLink from "./NavLink";
import Switch from "react-switch"
import { HiSun } from "@react-icons/all-files/hi/HiSun"
import { HiMoon } from "@react-icons/all-files/hi/HiMoon"
import { Squash } from "hamburger-react";
import colors from "tailwindcss/colors";

const PageLink: React.FC<{href: string, className?: string, onClick: () => void}> = ({href, children, className, onClick}) => <NavLink onClick={onClick} activeClassName="active-underline dark:text-gray-400 text-gray-500" className={`h-full p-5 m-1 text-center animated-underline ${className}`} passHref href={href}>{children}</NavLink>

const ThemeSwtich = () => {
    const { theme, setTheme } = useTheme();

    const dark = theme === 'dark' ? true : false;

    const [checked, setChecked] = React.useState(dark);
    const [mounted, setMounted] = React.useState(false);

    const handleChange = (nextChecked: boolean) => {
        setChecked(!checked);
    };

    // When mounted on client, now we can show the UI
    React.useEffect(() => setMounted(true), []);

    React.useEffect(() => {
        setTheme(checked ? 'dark' : 'light');
    }, [checked, setTheme]);

    if (!mounted) return null;

    const iconStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 15,
        color: "orange",
        paddingRight: 2,
        paddingLeft: theme === "dark" ? 5 : 0
    }

    return <Switch
            className="react-switch px-5 float-right pl-3"
            checked={theme === "dark"}
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
            aria-label="Toggle dark theme." />
}

const Header = () => {
    const { theme } = useTheme()
    const [shouldOpen, setShouldOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [h, setH] = React.useState("0");
    const transition = "max-height 0.5s ease-in-out";
    const [topOfPage, setAtTopOfPage] = React.useState(true);

    const toggle = () => {
        setH(h === "0" ? "250px" : "0");
        setShouldOpen(!shouldOpen);
        if (open) {
            setTimeout(() => setOpen(!open), 400);
        } else {
            setTimeout(() => setOpen(!open), 100);
        }
    }

    const handleScroll = () => {
        setAtTopOfPage(window.scrollY === 0 ? true : false);
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <>
            <div style={{ backgroundColor: 'inherit', borderBottom: topOfPage && `1px solid ${colors.gray[400]}` }} className={`fixed z-50 opacity-90 ${topOfPage ? "" : "shadow-2xl"} top-0 -mb-1 left-0 p-5 pb-4 w-full right-0 dark:text-white text-black`}>
                <Link passHref href="/" >
                    <a className="text-center md:text-left">
                        <Image src={`/me-${theme}.png`} alt="" width={40} height={40} />
                    </a>
                </Link>
                <nav className="float-right hidden md:block absolute top-1 m-0 p-5 pb-4 right-0" >
                    <PageLink onClick={null} href="/">Home</PageLink>
                    <PageLink onClick={null} href="/about">About</PageLink>
                    <ThemeSwtich />
                </nav>
                <div style={{backgroundColor: "inherit", zIndex: -1}} className="float-right opacity-100 md:hidden absolute w-full p-0 top-0 m-0 right-0">
                    <i onClick={toggle} className="float-right text-current p-5 pt-3 t-0" >
                        <Squash
                            color="currentColor" 
                            toggle={toggle} 
                            toggled={shouldOpen} />
                    </i>
                    <div style={{ backgroundColor: "inherit", zIndex: -1 }} className="mt-0 pt-0">
                        <nav style={{transition, maxHeight: h, zIndex: -1, backgroundColor: "inherit", borderBottom: open && topOfPage && `1px solid ${colors.gray[400]}` }} className={`overflow-hidden ${topOfPage ? '' : 'shadow-2xl'} block absolute opacity-90 mt-16 w-full top-1 right-0 left-0`}>
                            <PageLink onClick={toggle} className="w-full block" href="/">Home</PageLink>
                            <PageLink onClick={toggle} className="w-full block" href="/about">About</PageLink>
                            <label className="w-full block p-5">
                                <span>{theme === "dark" ? "Disable dark mode" : "Enable dark mode"}</span>
                                <ThemeSwtich />
                            </label>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="relative top-0 right-0 left-0 h-20" />
        </>
    )
}

export default Header;