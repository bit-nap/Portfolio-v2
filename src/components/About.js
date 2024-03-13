import React from "react";
import { IconContext } from "react-icons";
import { FaPython, FaJava, FaAngular, FaReact, FaNode } from "react-icons/fa";
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

const skillIcons = [
  <FaPython />,
  <FaJava />,
  <FaAngular />,
  <FaReact />,
  <FaNode />,
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

function About() {
  return (
    <div className="about-page">
      <h1>Professional Skill Set</h1>
      <div className="skillset-container">
        <div className="skillset-row">
          <SkillsetBoxes></SkillsetBoxes>
        </div>
      </div>
    </div>
  );
}

function SkillsetBoxes() {
  /* TODO: create a shuffle that lasts ~2sec where the user can see each icon change */
  for (let i = skillIcons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [skillIcons[i], skillIcons[j]] = [skillIcons[j], skillIcons[i]];
  }

  let skillsList = [];
  for (const skill of skillIcons) {
    console.log(skill);
    skillsList.push(<div className="skillset-col">{skill}</div>);
  }
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "6vw" }}>
        {skillsList}
      </IconContext.Provider>
    </>
  );
}

export default About;
