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
  console.log(params);
  if (params.name === "python") {
    return (
      <Col className="skillset-col">
        <FaPython />
        <p className="skill-name">Python</p>
      </Col>
    );
  } else if (params.name === "java") {
    return (
      <Col className="skillset-col">
        <FaJava />
        <p className="skill-name">Java</p>
      </Col>
    );
  } else if (params.name === "javascript") {
    return (
      <Col className="skillset-col">
        <SiJavascript />
        <p className="skill-name">JavaScript</p>
      </Col>
    );
  } else if (params.name === "c") {
    return (
      <Col className="skillset-col">
        <SiC />
        <p className="skill-name">C</p>
      </Col>
    );
  } else if (params.name === "c#") {
    return (
      <Col className="skillset-col">
        <SiCsharp />
        <p className="skill-name">C#</p>
      </Col>
    );
  } else if (params.name === "c++") {
    return (
      <Col className="skillset-col">
        <SiCplusplus />
        <p className="skill-name">C++</p>
      </Col>
    );
  } else if (params.name === "angular") {
    return (
      <Col className="skillset-col">
        <FaAngular />
        <p className="skill-name">Angular</p>
      </Col>
    );
  } else if (params.name === "react") {
    return (
      <Col className="skillset-col">
        <FaReact />
        <p className="skill-name">React</p>
      </Col>
    );
  } else if (params.name === "postgresql") {
    return (
      <Col className="skillset-col">
        <SiPostgresql />
        <p className="skill-name">PostgreSQL</p>
      </Col>
    );
  } else if (params.name === "nodejs") {
    return (
      <Col className="skillset-col">
        <FaNode />
        <p className="skill-name">Node.js</p>
      </Col>
    );
  } else if (params.name === "vscode") {
    return (
      <Col className="skillset-col">
        <SiVisualstudiocode />
        <p className="skill-name">Visual Studio Code</p>
      </Col>
    );
  } else if (params.name === "pycharm") {
    return (
      <Col className="skillset-col">
        <SiPycharm />
        <p className="skill-name">PyCharm</p>
      </Col>
    );
  } else if (params.name === "intellij") {
    return (
      <Col className="skillset-col">
        <SiIntellijidea />
        <p className="skill-name">IntelliJ IDEA</p>
      </Col>
    );
  } else if (params.name === "rider") {
    return (
      <Col className="skillset-col">
        <SiRider />
        <p className="skill-name">Rider</p>
      </Col>
    );
  } else if (params.name === "datagrip") {
    return (
      <Col className="skillset-col">
        <SiDatagrip />
        <p className="skill-name">DataGrip</p>
      </Col>
    );
  }
}

export default About;
