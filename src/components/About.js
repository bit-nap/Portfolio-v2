import React, { useEffect, useState } from "react";
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

function SkillsetBoxes() {
  const [skills, setSkills] = useState();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < 50) {
        for (let i = skillIcons.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [skillIcons[i], skillIcons[j]] = [skillIcons[j], skillIcons[i]];
        }

        let skillsList = [];
        for (const skill of skillIcons) {
          skillsList.push(<div className="skillset-col">{skill}</div>);
        }

        setSkills(skillsList);
        console.log(i);
        i += 1;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "6rem" }}>
        {skills}
      </IconContext.Provider>
    </>
  );
}

export default About;
