import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Giles Gordon </span>
            from <span className="purple"> Pembroke, Maine.</span>
            <br />
            I am currently a Sophomore at Northeastern University pursuing a degree in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do Include playing games, exercising, cooking, traveling, and playing tennis, squash, and piano.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
