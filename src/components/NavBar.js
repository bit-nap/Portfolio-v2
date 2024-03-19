import React, { useState } from "react";

/**
 * creates a NavBar component that works to redirect the user to different pages
 *
 * @returns NavBar component
 */
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo containing name and redirect to Home page */}
          <a href="/" className="navbar-logo">
            Norton A. Perez
          </a>
          
          {/* menu icon for small/medium devices, hidden on screen width > 1024px */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          {/* navegation menu containing links to all pages */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/projects" className="nav-links">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-links">
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
