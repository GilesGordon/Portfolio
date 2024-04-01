import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiFirebase,
  SiC,
  SiKotlin,
  SiRedux,
  SiAxios,
  SiJetpackcompose,
} from "react-icons/si";
import { FaApple, FaBootstrap } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";

function Otherstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Node.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRedux />
        <h6>Redux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAxios />
        <h6>Axios</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
        <h6>Bootstrap</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJetpackcompose />
        <h6>Jetpack Compose</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <BiCoinStack />
        <h6>Room</h6>
      </Col>
    </Row>
  );
}

export default Otherstack;
