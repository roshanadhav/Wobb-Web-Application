import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="/images/6716c18e45760446b740a3b6_logo final one 5.png"
            alt="Wobb Logo"
            className="logo-img"
          />
          <h1 className="logo">Wobb</h1>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Log in</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
