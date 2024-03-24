import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Kanbas from "../../Assets/Projects/kanbas_pic_linkedin.png";
import Reversi from "../../Assets/Projects/reversi.png";
import Klondike from "../../Assets/Projects/Klondike.png";
import Maze from "../../Assets/Projects/maze_solver.png";
import Map from "../../Assets/Projects/map_routing.png";
import Products from "../../Assets/Projects/product_list.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kanbas}
              isBlog={false}
              title="Kanbas"
              description="Currently developing a mock Canvas web application with responsive client-side interactivity and dynamic content using HTML, CSS, and JavaScript and through leveraging the React framework for modular and reusable code."
              ghLink="https://github.com/GilesGordon/kanbas-react-web-app"
              demoLink="https://dainty-melomakarona-90832c.netlify.app/#/Kanbas/Dashboard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Reversi}
              isBlog={false}
              title="Reversi"
              description="Co-developed the game Reversi in 3.5k loc featuring human or customizable AI gameplay, a fully functional GUI made with Java Swing, and hexagonal and square board options."
              ghLink="https://github.com/GilesGordon/Reversi"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Klondike}
              isBlog={false}
              title="Klondike"
              description="Created multiple playable console-based versions of the game Klondike in Java using object-oriented design principles such as the MVC design pattern, abstraction, and encapsulation."
              ghLink="https://github.com/GilesGordon/Klondike"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Maze}
              isBlog={false}
              title="Maze Generator and Solver"
              description="Collaborated to create a program using Kruskal's Algorithm to create randomized mazes with a single viable path, and implemented both breadth-first and depth-first search algorithms for solving mazes efficiently"
              ghLink="https://github.com/GilesGordon/CS2510_Projects/blob/main/Maze.java"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Map}
              isBlog={false}
              title="Map Routing Algorithm"
              description="Implemented Dijkstra's algorithm for assessing the shortest path between U.S. cities represented by coordinate pairs. Modeled the map as a weighted graph, utilizing a min-heap data structure to store city distances. ptimized runtime by employing dynamic programming techniques."
              ghLink="https://github.com/GilesGordon/DeerfieldProjects/tree/main/MapRouting"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Products}
              isBlog={false}
              title="Product List App"
              description="(add description)"
              ghLink="https://github.com/GilesGordon/cs4520-assg4-starter-code"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
