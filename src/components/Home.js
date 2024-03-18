import React, { useState, useEffect } from "react";
import Pfp from "../assets/professional-pfp.jpg";
import gh_pfp from "../assets/github-pfp.jpg";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  const [titleDisplayed, setTitle] = useState("");

  useEffect(() => {
    const possibleTitles = [
      "PROGRAMMER",
      "SOFTWARE DEVELOPER",
      "WEB DEVELOPER",
      "FULL STACK DEV",
    ];
    let titleIndex = 0;
    let title = possibleTitles[titleIndex];
    let index = 0;
    let operation = "inc";

    const interval = setInterval(() => {
      // the character by character writing of title
      // console.log(title + " : " + index);
      setTitle(title.substring(0, index));
      if (index === 0 && operation === "dec") {
        titleIndex += 1;
        titleIndex %= possibleTitles.length;
        title = possibleTitles[titleIndex];
        operation = "inc";
      } else if (index === title.length) {
        operation = "dec";
        index -= 1;
      } else {
        operation === "inc" ? (index += 1) : (index -= 1);
      }
    }, 176);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="pfp-container">
        <img className="main-pfp" src={Pfp} alt="profile" />
        <img className="back-pfp" src={gh_pfp} alt="" />
      </div>

      <h2 id="intro">Hello, I'm</h2>
      <h1 id="name">Norton Andres Perez</h1>
      <h3 id="title-placeholder">{titleDisplayed}</h3>
      <div className="profile-links">
        <IconContext.Provider value={{ color: "#fff", size: 42 }}>
          <a className="profile-icons" href="https://github.com/bit-nap">
            <BsGithub />
          </a>
          <a
            className="profile-icons"
            href="https://www.linkedin.com/in/norton-a-perez/"
          >
            <FaLinkedin />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Home;
