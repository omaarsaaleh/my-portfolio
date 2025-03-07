import { useRef, useEffect, useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggleButton } from "../ThemeToggleButton/ThemeToggleButton";
import "./NavBar.css";

import Logo from '../Logo/Logo.jsx'

export default function NavBar() {
    const location = useLocation();
    const navRef = useRef(null);
    const lastScrollTop = useRef(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (navRef.current) {
            navRef.current.style.top = scrollTop > lastScrollTop.current ? "-100px" : "0";
        }
        lastScrollTop.current = Math.max(scrollTop, 0);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <nav ref={navRef}>
                <div className="nav-content">
                    <Logo styling={'small-logo'}></Logo>

                    <ul className="nav-links">
                        {["about", "education", "projects"].map((item) => (
                            <li key={item} className={location.pathname === `/${item}` ? "active-element" : ""}>
                                <Link to={`/${item}`}>{item}</Link>
                            </li>
                        ))}
                    </ul>

                    <ul className="nav-icons">
                        <li><ThemeToggleButton /></li>

                        <li id="hamburger-icon">
                            <button onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div
                className={`overlay ${isMenuOpen ? "show" : ""}`}
            ></div>

            <div className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
                <button className="close-btn" onClick={toggleMenu}><p>X</p></button>
                <ul>
                    {["about", "education", "projects"].map((item) => (
                        <li key={item} className={location.pathname === `/${item}` ? "active-element" : ""}>
                            <Link to={`/${item}`} onClick={toggleMenu}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}