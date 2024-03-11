import React from "react";
import { Row, Col } from "react-bootstrap";
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

const skills = [
  "python",
  "java",
  "javascript",
  "c",
  "c#",
  "c++",
  "angular",
  "react",
  "postgresql",
  "nodejs",
  "vscode",
  "pycharm",
  "intellij",
  "rider",
  "datagrip",
];

function About() {
  return (
    <div className="about-page">
      <h1>Technical Skill Set</h1>
      <div className="skillset-container">
        <Row className="skillset-row">
          <SkillsetBoxes></SkillsetBoxes>
        </Row>
      </div>
    </div>
  );
}

function SkillsetBoxes() {
  /* TODO: create a shuffle that lasts ~2sec where the user can see each icon change */
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  let skillsList = [];
  for (const skill of shuffle(skills)) {
    skillsList.push(<GetRandomSkill name={skill}></GetRandomSkill>);
  }
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "6vw" }}>
        {skillsList}
      </IconContext.Provider>
    </>
  );
}

function GetRandomSkill(params) {
  switch (params.name) {
    case "python":
      return (
        <Col className="skillset-col">
          <FaPython />
          <p className="skill-name">Python</p>
        </Col>
      );
    case "java":
      return (
        <Col className="skillset-col">
          <FaJava />
          <p className="skill-name">Java</p>
        </Col>
      );
    case "javascript":
      return (
        <Col className="skillset-col">
          <SiJavascript />
          <p className="skill-name">JavaScript</p>
        </Col>
      );
    case "c":
      return (
        <Col className="skillset-col">
          <SiC />
          <p className="skill-name">C</p>
        </Col>
      );
    case "c#":
      return (
        <Col className="skillset-col">
          <SiCsharp />
          <p className="skill-name">C#</p>
        </Col>
      );
    case "c++":
      return (
        <Col className="skillset-col">
          <SiCplusplus />
          <p className="skill-name">C++</p>
        </Col>
      );
    case "angular":
      return (
        <Col className="skillset-col">
          <FaAngular />
          <p className="skill-name">Angular</p>
        </Col>
      );
    case "react":
      return (
        <Col className="skillset-col">
          <FaReact />
          <p className="skill-name">React</p>
        </Col>
      );
    case "postgresql":
      return (
        <Col className="skillset-col">
          <SiPostgresql />
          <p className="skill-name">PostgreSQL</p>
        </Col>
      );
    case "nodejs":
      return (
        <Col className="skillset-col">
          <FaNode />
          <p className="skill-name">Node.js</p>
        </Col>
      );
    case "vscode":
      return (
        <Col className="skillset-col">
          <SiVisualstudiocode />
          <p className="skill-name">Visual Studio Code</p>
        </Col>
      );
    case "pycharm":
      return (
        <Col className="skillset-col">
          <SiPycharm />
          <p className="skill-name">PyCharm</p>
        </Col>
      );
    case "intellij":
      return (
        <Col className="skillset-col">
          <SiIntellijidea />
          <p className="skill-name">IntelliJ IDEA</p>
        </Col>
      );
    case "rider":
      return (
        <Col className="skillset-col">
          <SiRider />
          <p className="skill-name">Rider</p>
        </Col>
      );
    case "datagrip":
      return (
        <Col className="skillset-col">
          <SiDatagrip />
          <p className="skill-name">DataGrip</p>
        </Col>
      );
    default:
      break;
  }
}

export default About;
