import React from "react";
import Pfp from "../assets/professional-pfp.jpg";
import gh_pfp from "../assets/github-pfp.jpg";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

function Home() {
  return (
    <div className="home-container">
      <div className="pfp-container">
        <img className="main-pfp" src={Pfp} alt="profile" />
        <img className="back-pfp" src={gh_pfp} alt="" />
      </div>

      <div className="intro-container">
        <h2>Hello, I'm</h2>
        <h1>Norton Andres Perez</h1>
        <h3 data-value="PROGRAMMER">PROGRAMMER</h3>
        <div className="profile-links">
          <IconContext.Provider value={{ color: "#fff", size: "5vw" }}>
            <a className="profile-icons" href="https://github.com/bit-nap">
              <BsGithub />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Home;
