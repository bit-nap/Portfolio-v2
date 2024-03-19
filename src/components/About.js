import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import {
  FaPython,
  FaJava,
  FaAngular,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiCsharp,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiPostgresql,
  SiVisualstudiocode,
  SiPycharm,
  SiIntellijidea,
  SiRider,
  SiDatagrip,
} from "react-icons/si";

// skill icons to display
const skillIcons = [
  <FaPython />,
  <FaJava />,
  <FaAngular />,
  <FaReact />,
  <FaNode />,
  <FaGitAlt />,
  <SiCsharp />,
  <SiJavascript />,
  <SiC />,
  <SiCplusplus />,
  <SiPostgresql />,
  <SiVisualstudiocode />,
  <SiPycharm />,
  <SiIntellijidea />,
  <SiRider />,
  <SiDatagrip />,
];

/**
 * creates a About page that contains professional skills
 *
 * @returns About page
 */
function About() {
  return (
    <div className="about-page">
      <p className="pre-title">my professional</p>
      <h1>SKILL SET</h1>
      <div className="skillset-container">
        <div className="skillset-row">
          <SkillsetBoxes></SkillsetBoxes>
        </div>
      </div>
    </div>
  );
}

/**
 * function to shuffle skills with an effect visible everytime on the About page (duration < 5sec)
 *
 * @returns all the skills, shuffled w/ an effect
 */
function SkillsetBoxes() {
  const [skills, setSkills] = useState();

  // effect for the icons suffle
  useEffect(() => {
    let shuffle = 0;

    // interval for 25 shuffles
    const interval = setInterval(() => {
      if (shuffle < 25) {
        for (let i = skillIcons.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [skillIcons[i], skillIcons[j]] = [skillIcons[j], skillIcons[i]];
        }

        let skillsList = [];
        for (const skill of skillIcons) {
          skillsList.push(<div className="skillset-col">{skill}</div>);
        }

        setSkills(skillsList);
        // console.log(shuffle);
        shuffle += 1;
      }
    }, 100); // 1 shuffle every 0.1sec

    return () => clearInterval(interval);
  }, []);

  // icons & format
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "6rem" }}>
        {skills}
      </IconContext.Provider>
    </>
  );
}

export default About;
