import { useState, useEffect } from "react";

const THEME_KEY = "theme";

export const useTheme = () => {
    const getInitialTheme = () => {
            const storedTheme = localStorage.getItem(THEME_KEY);
            if (storedTheme) return storedTheme;
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        if (!localStorage.getItem(THEME_KEY)) {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleChange = () => setTheme(mediaQuery.matches ? "dark" : "light");
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return { theme, toggleTheme };
};
