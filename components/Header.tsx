import React from "react";
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "../context/theme";
import NavLink from "./NavLink";
import Switch from "react-switch"
import { FaSun } from "@react-icons/all-files/fa/FaSun"
import { FaMoon } from "@react-icons/all-files/fa/FaMoon"
import colors from "tailwindcss/colors";
import { Squash } from "hamburger-react";

const PageLink: React.FC<{href: string, className?: string}> = ({href, children, className}) => <NavLink activeClassName="active-underline" className={`h-full p-4 m-1 animated-underline ${className}`} passHref href={href}>{children}</NavLink>

const Header = () => {
    const { theme, dark, toggle } = useTheme()
    const [shouldOpen, setShouldOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [h, setH] = React.useState("0");
    const [transition, setTransition] = React.useState("max-height 0.5s ease-out")

    const iconStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 15,
        color: "orange",
        paddingRight: 2,
        paddingLeft: dark ? 5 : 0
    }

    return (
        <>
            <div style={{ borderBottom: !open ? `1px solid ${colors.gray[400]}` : null, backgroundColor: 'inherit' }} className="fixed p-4 top-0 left-0 right-0 dark:text-white text-black">
                <Link passHref href="/" >
                    <a className="md:mx-0 sm:mx-auto">
                        <Image src={`/me-${theme}.png`} alt="" width={40} height={40} />
                    </a>
                </Link>
                <nav className="float-right invisible md:visible absolute top-0 m-0 p-4 right-0" >
                    <PageLink href="/">Home</PageLink>
                    <PageLink href="/about">About</PageLink>
                    <Switch
                        className="react-switch absolute pl-3"
                        checked={dark}
                        onChange={toggle}
                        onColor="#fff"
                        offColor="#000"
                        checkedIcon={<div style={iconStyle}><FaMoon color="#000" /></div>}
                        uncheckedIcon={<div style={iconStyle}><FaSun color="#fff" /></div>}
                        id="material-switch"
                        handleDiameter={30}
                        width={48}
                        height={23} 
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        aria-label="Toggle dark theme." />
                </nav>
                <div style={{backgroundColor: "inherit", zIndex: -1}} className="float-right md:hidden absolute w-full p-0 z-0 top-0 m-0 right-0">
                    <i className="float-right p-4 pt-3 t-0" >
                        <Squash 
                            toggle={() => {
                                setShouldOpen(!shouldOpen)
                                if (open) {
                                    setTimeout(() => setOpen(!open), 400);
                                } else {
                                    setTimeout(() => setOpen(!open), 100);
                                }
                                setH(h === "0" ? "250px" : "0")
                                setTransition("max-height 0.5s ease-out")
                            }} 
                            toggled={shouldOpen} />
                    </i>
                    <div style={{ backgroundColor: "inherit" }} className="mt-0 pt-0">
                        <nav style={{transition, maxHeight: h, zIndex: -1, borderBottom: open ? `1px solid ${colors.gray[400]}` : null, backgroundColor: "inherit" }} className={`block overflow-hidden absolute mt-16 w-full right-0 left-0`}>
                            <PageLink className="w-full block" href="/">Home</PageLink>
                            <PageLink className="w-full block" href="/about">About</PageLink>
                            <label className="w-full block p-5">
                                <span>{dark ? "Disable dark mode" : "Enable dark mode"}</span>
                                <Switch
                                    className="react-switch float-right absolute pl-3"
                                    checked={dark}
                                    onChange={toggle}
                                    onColor="#fff"
                                    offColor="#000"
                                    checkedIcon={<div style={iconStyle}><FaMoon color="#000" /></div>}
                                    uncheckedIcon={<div style={iconStyle}><FaSun color="#fff" /></div>}
                                    id="material-switch"
                                    handleDiameter={30}
                                    width={48}
                                    height={23} 
                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                    aria-label="Toggle dark theme." />
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