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
import Monolog from "../../Assets/Projects/monolog_home.png";
import LizardLegacy from "../../Assets/Projects/lizard_legacy.png";
import SportApp from "../../Assets/Projects/app_home.png";

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
              imgPath={Monolog}
              isBlog={false}
              title="Monolog"
              description="Responsive, dynamic, and aesthetic music social networking website using the MERN stack and Spotify API, 
              enabling users to log information and interact with artists, albums, and other accounts. Created Axios clients to make 
              API calls for retrieving real-time music data from Spotify and storing user information in MongoDB via a self-developed 
              Node/Express server."
              ghLink="https://github.com/GilesGordon/music-react-web-app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kanbas}
              isBlog={false}
              title="Kanbas"
              description="Mock Canvas web application with responsive client-side interactivity and dynamic content using HTML, CSS, and JavaScript and through leveraging the React framework for modular and reusable code. It will use RESTful APIs to communicate between the front-end and back-end using technologies such as Node.js and MongoDB, and will employ security best practices for user authentication."
              ghLink="https://github.com/GilesGordon/kanbas-react-web-app"
              demoLink="https://dainty-melomakarona-90832c.netlify.app/#/Kanbas/Dashboard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Reversi}
              isBlog={false}
              title="Reversi"
              description="Co-developed the game Reversi in 3.5k loc featuring human or customizable AI gameplay, a fully functional GUI made with Java Swing, and hexagonal and square board options. Maintained design quality by partitioning the code into the model view and controller to ensure modularity. Implemented the Strategies, Adapter, Decorator, and Observer patterns, favoring composition over inheritance."
              ghLink="https://github.com/GilesGordon/Reversi"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LizardLegacy}
              isBlog={false}
              title="Lizard Legacy"
              description="Submission for the 2024 GMTK game jam, a game development competition where contestants get a theme and four days to code an original game. For this year’s theme “built to scale,” our team developed the game “Lizard Legacy.” All code was written in GDScript (a scripting language that uses the same syntax as Python) in the Godot game engine."
              ghLink="https://github.com/jerryzhou11/malaphor"
              demoLink="https://stolenquotient2.itch.io/lizard-legacy"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Map}
              isBlog={false}
              title="Map Routing Algorithm"
              description="Implemented Dijkstra's algorithm for assessing the shortest path between U.S. cities represented by coordinate pairs. Modeled the map as a weighted graph, utilizing a min-heap data structure to store city distances. The UI was created in Xcode using the IOS SDK."
              ghLink="https://github.com/GilesGordon/DeerfieldProjects/tree/main/MapRouting"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Klondike}
              isBlog={false}
              title="Klondike"
              description="Created multiple playable console-based versions of the game Klondike in Java using object-oriented design principles such as the MVC design pattern, abstraction, and encapsulation. Wrote exhaustive test cases for all aspects of the models, the view, and the controller, ensuring proper functionality."
              ghLink="https://github.com/GilesGordon/Klondike"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Maze}
              isBlog={false}
              title="Maze Generator and Solver"
              description="Collaborated to create a program using Kruskal's Algorithm to create randomized mazes with a single viable path, and implemented both breadth-first and depth-first search algorithms for solving mazes efficiently."
              ghLink="https://github.com/GilesGordon/CS2510_Projects/blob/main/Maze.java"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SportApp}
              isBlog={false}
              title="Sports List App"
              description="Co-developed an Android app in Kotlin that fetches and displays sports data from API-SPORTS using Retrofit 
              and Room for local data persistence. Utilized Recycler View and the MVVM architecture, ensuring efficient list display 
              and maintainable code structure."
              ghLink="https://github.com/GilesGordon/sports_data_app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
