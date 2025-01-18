"use client";

import "@/app/components/navbar/Navbar.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                <Link href="/#">
                    <h1 className="logo">ecosphere</h1>
                </Link>
                <div className="navbar-links">
                    <Link href="/oferta">oferta</Link>
                    <Link href="/kontakt" className="navbar-contact">
                        kontakt
                    </Link>
                </div>
                <button className="hamburger-menu" onClick={toggleMenu}>
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <Link href="/oferta" onClick={toggleMenu}>
                    oferta
                </Link>
                <Link className="mobile-link" href="/kontakt" onClick={toggleMenu}>
                    kontakt
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
