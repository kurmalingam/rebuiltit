import React, { useState } from "react";
import './Navbar.css';

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="brand">Rebuilt-It</div>

        {/* Dark/Light Toggle */}
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          title="Toggle Dark/Light Mode"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

        {/* Hamburger */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#services" className="nav-link">Services</a>
          <a href="#clients" className="nav-link">Clients</a>
          <a href="#booking" className="nav-link">Get In Touch</a>
          <a href="#community" className="nav-link">Community</a>
          <a href="#profiles" className="nav-link">Profiles</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
