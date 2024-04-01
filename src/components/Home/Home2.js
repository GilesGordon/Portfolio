import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm currently a student at Northeastern working towards a <i><b className="purple"> Bachelor of Science in Computer Science</b></i>
            . I find joy in developing innovative solutions to real world problems in the CS field, and I'm excited see where my education will 
            take me in this rapidly changing field.
              <br />
              <br />
            I have five years experience coding with object oriented programming languages, mainly in 
            <i><b className="purple"> Java, Python, and Objective-C.</b></i>
              <br />
              <br />
            Recently, I've discovered a new passion for web development and android app development. 
              <br />
              <br />
            Apart from coding, some other activities that I love to do Include playing games, exercising, cooking, traveling, and playing tennis, 
            squash, and piano.
            <br />
            <br />
              I'll be graduating Northeastern in the Spring of 2026, but meanwhile I'd like to get experience in the field through co-ops or 
              internships.  <i><b className="purple">Please feel free to contact me if you would like to connect, or are aware of any potential 
              opportunities for which you think I may be appropriate.</b></i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:gordon.gi@northeastern.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  < IoMail/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/GilesGordon"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gilesgordon/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
