import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { FaKaggle } from "react-icons/fa";
import RSA from "../assets/RSA.png";
import Qbert from "../assets/Q-bert1.png";
import REST from "../assets/REST.png";

const projects = {
  "Encrypted server communications": {
    image: RSA,
    components: "C#, Multithreading, RSA Algorithm",
    description:
      "Developed an RSA-encrypted client-server communication system for secure data exchange. Implemented key generation through multithreading to reduce creation time. Additional security methods, sending non-readable messages to the server and secure storage of cryptographic keys.",
  },
  "Digit Recognizer AI Challenge": {
    components: "Python, MNIST, Random Forest, Logistic Regression",
    description:
      "I completed the Digit Recognizer Challenge, a classic machine-learning scenario. This project was to create models from two classes of machine learning algorithms to test how each works and evaluate their performance.",
    github: "https://github.com/bit-nap/CSCI.331-Digit-Recognizer",
    kaggle:
      "https://www.kaggle.com/code/nortonperez/csci-331-digit-recognizer-notebook",
  },
  "Q-bert AI agent": {
    image: Qbert,
    components: "Python, PyTorch, gymnasium",
    description:
      "Used reinforcement learning to solve the arcade game Q-bert. Created a neural network that played the game optimally and successfully cleared levels.",
  },
  "REST API": {
    image: REST,
    components: "Java, Angular, JUnit",
    description:
      "Coordinated effectively in an Agile team of five to developed a Java-based API. We later implemented a website in Angular that interacted with the API to display information.",
    github: "https://github.com/bit-nap/eStore-Project-Fall-2022",
  },
  "Database Application": {
    components: "Python, SQL, PostgreSQL",
    description:
      "Developed an Instagram-like application that allowed users to share their interests in Movies. Analyzed five million records of data and transformed them into a visual format to draw conclusions and share findings.",
    github: "https://github.com/bit-nap/eStore-Project-Fall-2022",
  },
};

function Projects() {
  let projectsList = [];

  for (const [project, info] of Object.entries(projects)) {
    let image = "image" in info ? info["image"] : null;
    let comp = "components" in info ? info["components"] : null;
    let desc = "description" in info ? info["description"] : null;
    let ghLink = "github" in info ? info["github"] : null;
    let kgLink = "kaggle" in info ? info["kaggle"] : null;

    projectsList.push(
      <Col md={3} className="project-col">
        <ProjectBoxes
          title={project}
          github={ghLink}
          image={image}
          subtitle={comp}
          description={desc}
          kaggle={kgLink}
        ></ProjectBoxes>
      </Col>
    );
  }

  return (
    <div className="projects-page">
      <p className="pre-title">browse my recent</p>
      <h1>PROJECTS</h1>
      <div className="projects-container">
        <Row className="project-row">{projectsList}</Row>
      </div>
    </div>
  );
}

function ProjectBoxes(args) {
  return (
    <>
      <Card className="project-card">
        {args.image && (
          <Card.Img
            variant="top"
            src={args.image}
            style={{ width: "-webkit-fill-available" }}
          ></Card.Img>
        )}
        <Card.Body>
          <Card.Title className="project-title">{args.title}</Card.Title>
          <Card.Subtitle className="project-subtitle">
            {args.subtitle}
          </Card.Subtitle>
          <Card.Text style={{ textAlign: "justify" }}>
            {args.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="project-links">
            {args.github && (
              <>
                <BsGithub className="icon" />
                <p>
                  <a href={args.github}>GitHub</a>
                </p>
              </>
            )}
          </div>
          <div className="project-links">
            {args.kaggle && (
              <>
                <FaKaggle className="icon" />
                <p>
                  <a href={args.kaggle}>Kaggle</a>
                </p>
              </>
            )}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}

export default Projects;
