import React, { useState } from "react";

function closeMobileMenu() {}

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            Norton A. Perez
          </a>
          <div className="menu-icon icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
