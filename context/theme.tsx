import { createContext, useState, useContext } from "react";
import React from "react";

export const ThemeContext = createContext<{
    theme?: "dark" | "light", 
    dark?: boolean, 
    setDark?: (value: boolean) => void, 
    setTheme: (theme: "dark" | "light") => void
}>(null)

export const useTheme = () => {
    const l = useContext(ThemeContext);
    return {...l, toggle: () => {
        l.setDark(!l.dark);
        l.setTheme(l.theme === "light" ? "dark" : "light")
    }}
}

const ThemeProvider = ({children}) => {
    const [dark, setDark] = useState(true)
    const [theme, setTheme] = useState<"dark" | "light">(dark ? "dark" : "light")

    return (
        <ThemeContext.Provider value={{theme, setTheme, dark, setDark}}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;