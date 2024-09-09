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
  SiGodotengine,
} from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { BiCoinStack } from "react-icons/bi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaApple />
        <h6>Objective-C</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h6>HTML</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h6>CSS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <h6>C</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
        <h6>Kotlin</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGodotengine />
        <h6>GDScript</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
