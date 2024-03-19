import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

/**
 * creates a Footer component that has copyright and contact info
 *
 * @returns Footer component
 */
function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <ContactBanner></ContactBanner>
        <div id="copyright">
          <p>
            Copyright &copy; {year} Norton Andres Perez. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * function to get the information about contact methods
 *
 * @returns contact information
 */
function ContactBanner() {
  return (
    <div>
      <p className="pre-title">get in touch</p>
      <h1>CONTACT ME</h1>
      <div className="contact-info-banner">
        <div>
          <MdEmail className="icon"></MdEmail>
          <p>
            <a href="mailto:nap1118@rit.edu">nap1118@rit.edu</a>
          </p>
        </div>
        <div>
          <FaLinkedin className="icon"></FaLinkedin>
          <p>
            <a href="https://www.linkedin.com/in/norton-a-perez/">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
