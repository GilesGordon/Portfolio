import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMacos,
  SiWindows,
  SiLinux,
  SiIntellijidea,
  SiPycharm,
  SiAndroidstudio,
  SiXcode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <h6>Windows</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <h6>MacOS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h6>Linux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>VSCode</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <h6>IntelliJ</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <h6>Pycharm</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <h6>Android Studio</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
        <h6>XCode</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
