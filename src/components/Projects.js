import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { FaTools } from "react-icons/fa";

const projects = {
  "test 1": {},
  "test 2": {},
  "test 3": {},
  "test 4": {},
  "test 5": {},
  "test 6": {},
  "test 7": {},
  "REST API": {
    github: "https://github.com/bit-nap/eStore-Project-Fall-2022",
    image: "",
    components: "Angular JUnit",
    description:
      "Coordinated effectively in an Agile team of five to developed a Java-based API. We later implemented a website in Angular that interacted with the API to display information.",
  },
};

function Projects() {
  let projectsList = [];

  for (const [project, info] of Object.entries(projects)) {
    let ghLink = null;
    let image = null;
    let comp = null;
    let desc = null;
    if ("github" in info) ghLink = info["github"];
    if ("image" in info) image = info["image"];
    if ("components" in info) comp = info["components"];
    if ("description" in info) desc = info["description"];

    projectsList.push(
      <Col md={4} className="project-col">
        <ProjectBoxes
          title={project}
          github={ghLink}
          image={image}
          subtitle={comp}
          description={desc}
        ></ProjectBoxes>
      </Col>
    );
  }

  return (
    <div className="projects-page">
      <Container fluid>
        <p>browse my recent</p>
        <h1>PROJECTS</h1>
        <div className="projects-container">
          <Row
            className="project-row"
          >
            {projectsList}
          </Row>
        </div>
      </Container>
    </div>
  );
}

function ProjectBoxes(args) {
  return (
    <>
      <Card className="project-card">
        {!args.imgSrc && <FaTools />}
        {args.imgSrc && <Card.Img variant="top" src={args.image}></Card.Img>}
        <Card.Body>
          <Card.Title>{args.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {args.subtitle}
          </Card.Subtitle>
          <Card.Text style={{ textAlign: "justify" }}>
            {args.description}
          </Card.Text>
          <div className="project-links">
            {args.github && (
              <>
                <BsGithub className="icon"></BsGithub>
                <p>
                  <a href={args.github}>GitHub</a>
                </p>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Projects;
