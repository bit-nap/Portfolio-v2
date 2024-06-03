import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import { FaKaggle } from "react-icons/fa";
import RSA from "../assets/RSA.png";
import Qbert from "../assets/Q-bert1.png";
import REST from "../assets/REST.png";
import EER from "../assets/EER Diagram.png";

// projects
const projects = {
  "Database System Implementation": {
    components:
      "Java, SQL, B+ Trees, Database Optimization, Data Structures, Unix, Storage Management, Linux",
    description:
      "This project was about developing and testing a database management system, focusing on integrating storage management, parsers, and B+ Tree indexing. We also needed to ensure the system was compatible and operable on Linux machines, meeting stringent technical requirements and deadlines. By implementing advanced B+ tree indexing, we significantly enhanced data retrieval compared to when not using indexing. The system's indexing capabilities were seamlessly integrated for optimal performance without user intervention. As a result of our collective efforts, the group achieved a grade of 94%.",
  },
  "Weather Data Mining": {
    components:
      "Python, Jupyter Notebook, Exploratory Data Analysis, Neural Networks, K-Means Clustering",
    description:
      "Conducted a semester-long group project analyzing weather patterns in Rochester, Buffalo, and Syracuse. Collaborated with three other team members to clean, preprocess, and analyze the data. Applied EDA and data mining techniques, including k-means clustering and neural network. Compiled findings in a detailed report and presented key outcomes with visual representations, demonstrating effective teamwork and advanced data analysis skills, which resulted in a grade of 98%.",
  },
  "Encrypted Server Communications": {
    image: RSA,
    components:
      "C#, .NET, Multithreading, Public Key Cryptography, RSA Algorithm",
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
  "Q-bert AI Agent": {
    image: Qbert,
    components: "Python, PyTorch, gymnasium, Neural Network",
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
    image: EER,
    components: "Python, SQL, PostgreSQL",
    description:
      "Developed an Instagram-like application that allowed users to share their interests in Movies. Analyzed five million records of data and transformed them into a visual format to draw conclusions and share findings.",
  },
};

/**
 * creates a Projects page that displays all projects above
 *
 * @returns Projects page
 */
function Projects() {
  let projectsList = [];

  for (const [project, info] of Object.entries(projects)) {
    let image = "image" in info ? info["image"] : null;
    let comp = "components" in info ? info["components"] : null;
    let desc = "description" in info ? info["description"] : null;
    let ghLink = "github" in info ? info["github"] : null;
    let kgLink = "kaggle" in info ? info["kaggle"] : null;
    let exLink = "externalLink" in info ? info["externalLink"] : null;

    // call ProjectBoxes with the argument fields below
    projectsList.push(
      <Col md={3} className="project-col">
        <ProjectBoxes
          image={image}
          title={project}
          subtitle={comp}
          description={desc}
          github={ghLink}
          kaggle={kgLink}
          external={exLink}
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

/**
 * A function to make a Card for a project containing info about the project and relevant links
 *
 * @param {*} args the args pased. fields are: image, title, subtitle, description, github, kaggle, external
 * @returns a singular Card with the arguments that are NOT null
 */
function ProjectBoxes(args) {
  return (
    <>
      <Card className="project-card">
        {args.image && (
          <Card.Img
            variant="top"
            src={args.image}
            style={{ width: "100%" }}
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
        <Card.Footer style={{ marginBottom: "2vh" }}>
          {args.github && (
            <div className="project-links">
              <BsGithub className="icon" />
              <p>
                <a href={args.github}>GitHub</a>
              </p>
            </div>
          )}
          {args.kaggle && (
            <div className="project-links">
              <FaKaggle className="icon" />
              <p>
                <a href={args.kaggle}>Kaggle</a>
              </p>
            </div>
          )}
          {args.external && (
            <div className="project-links">
              <BsBoxArrowUpRight className="icon" />
              <p>
                <a href={args.external}>Demo</a>
              </p>
            </div>
          )}
        </Card.Footer>
      </Card>
    </>
  );
}

export default Projects;
