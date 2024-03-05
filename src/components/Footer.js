import React from "react";
import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <ContactBanner></ContactBanner>
      <div id="copyright">
        Copyright &copy; {year} Norton Andres Perez. All Rights Reserved.
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
          <img src={emailIcon} alt="Email icon" className="icon" />
          <p>
            <a href="mailto:nap1118@rit.edu">nap1118@rit.edu</a>
          </p>
        </div>
        <div>
          <img src={linkedinIcon} alt="LinkedIn icon" className="icon" />
          <p>
            <a href="https://www.linkedin.com/in/norton-a-perez/">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
