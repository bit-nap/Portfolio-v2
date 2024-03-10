import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

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

function ContactBanner() {
  return (
    <div>
      <h1>Contact me</h1>
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
